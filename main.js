import './assets/styles/style.scss'

import {
  getBodyRowTemplate,
  saveToStorage,
  getFromStorage,
  getTableHeaderTemplate,
} from './js/helpers'

// Опеределяем основные элементы на странице

const tableBody = document.querySelector('.products_table-body')
const addProductBtn = document.querySelector('.add_button')
const settingsBtn = document.querySelector('.products_settings')

// Начальное состояние
let products = getFromStorage('products') || []
let id = 0

// Здесь может быть функция, которая запрашивает данные с сервера, например: getProductsFromDataBase(url)

// Основная функция для добавления, удаления, взаимодействия с продуктами

const renderProducts = () => {
  // Получаем шаблон для шапки таблицы и отрисовываем на странице

  const tableHeader = getTableHeaderTemplate()

  tableBody.innerHTML =
    tableHeader +
    products.map((product, id) => getBodyRowTemplate(product, product.id, id)).join('')

  // Сохраняем в хранилище

  saveToStorage('products', products)

  // Функционал для удаления продукта из списка

  const deals = document.querySelectorAll('.body-content-icon-deal')
  deals.forEach((deal) => {
    const dealBtn = deal.querySelector('.deal')

    dealBtn.addEventListener('click', (e) => {
      deal.classList.add('active')

      const deleteBtn = deal.querySelector('.delete')
      deleteBtn.classList.toggle('show')

      deleteBtn.addEventListener('click', () => {
        const id = Number(dealBtn.dataset.id)
        removeProduct(id)
      })
    })
  })

  // Функционал для перемещения продуктов

  const items = document.querySelectorAll('.body_row')
  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
      setTimeout(() => {
        item.classList.add('dragging')
      })
    })

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging')
    })
  })

  const initSort = (e) => {
    e.preventDefault()

    const draggingEl = document.querySelector('.dragging')

    const siblings = [...tableBody.querySelectorAll('.body_row:not(.dragging)')]

    const next = siblings.find((sibling) => {
      return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    })

    tableBody.insertBefore(draggingEl, next)
  }

  tableBody.addEventListener('dragover', initSort)
  tableBody.addEventListener('dragenter', (e) => {
    e.preventDefault()
  })

  // Функционал для управления состоянием отображения колонок

  settingsBtn.addEventListener('click', () => {
    const productsDisplay = document.querySelector('.products_columns-display')
    const productsDisplayList = document.querySelector('.products_display-list')
    const productsDisplayBtn = document.querySelector('.products_display-btn')
    const listItems = productsDisplayList.querySelectorAll('li')

    if (productsDisplayList.classList.contains('show')) {
      productsDisplayList.classList.toggle('show')
      productsDisplayBtn.classList.toggle('show')
    }

    productsDisplay.classList.toggle('show')

    productsDisplay.addEventListener('click', (e) => {
      listItems.forEach((item) => {
        const input = item.querySelector('input')
        if (e.target !== input && e.target !== item) {
          productsDisplayList.classList.toggle('show')
          productsDisplayBtn.classList.add('show')
        } else return
      })
    })

    listItems.forEach((item) => {
      const input = item.querySelector('input')
      input.addEventListener('click', () => {
        const column = document.querySelectorAll(`#${input.name}`)
        column.forEach((c) => {
          if (input.checked) {
            c.classList.remove('hide')
          } else {
            c.classList.add('hide')
          }
        })
      })
    })
  })

  const unitNameCell = tableBody.querySelectorAll('.unit_name')
  unitNameCell.forEach((unit) => {
    const container = unit.querySelector('.products_table-content')
    const list = unit.querySelector('.list')
    container.addEventListener('click', () => {
      list.classList.toggle('show')

      const listItems = list.querySelectorAll('li')
      listItems.forEach((item) => {
        item.addEventListener('click', () => {
          list.classList.remove('show')
          const text = item.textContent
          container.textContent = text
        })
      })
    })
  })

  // Функционал для управления размерами колонок

  const tableHeight = tableBody.getBoundingClientRect().height

  document.onmousedown = (e) => {
    let value
    const resizers = document.querySelectorAll('.resizer')
    resizers.forEach((res) => {
      if (e.target !== res) {
        return
      }

      const target = e.target
      target.style.height = `${tableHeight}px`
      target.style.opacity = '1'

      const parent = target.closest('.products_table-cell')
      const column = document.querySelectorAll(`#${parent.id}`)
      const coords = parent.getBoundingClientRect()
      console.log(coords)
      const targetCoords = target.getBoundingClientRect()
      console.log(targetCoords)

      document.onmousemove = (event) => {
        const delta = event.pageX - coords.right
        value = coords.width + delta

        column.forEach((c) => {
          c.style.width = `${value}px`
        })

        document.body.style.cursor = 'col-resize'
      }

      document.onmouseup = (e) => {
        target.style.height = '100%'
        target.style.opacity = '0'
        document.body.style.cursor = 'default'

        document.onmousemove = null
        document.onmouseup = null
      }
    })
  }
}

// Функция удаления продукта

const removeProduct = (id) => {
  products = products.filter((prod) => prod.id !== id)
  renderProducts(products)
}

// Фунцкционал добавления нового продукта

addProductBtn.addEventListener('click', () => {
  const newProduct = {
    id,
    pName: 'Мраморный щебень фр. 2-5 мм, 25кг',
    price: 1231,
    count: 12,
    name: 'Мраморный щебень',
    total: 1231,
  }

  // Здесь может быть функция для получения данных о новом продукте, например: getNewProduct(data)

  id++

  products.push(newProduct)
  saveToStorage('products', products)
  tableBody.innerHTML = ''
  renderProducts(products)
})

renderProducts(products)
