(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const S=()=>`
    <li class="products_table-row header-row">
    <div class="products_table-cell" id="number">
      <div class="products_table-content">
        Номер
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="deal">
      <div class="products_table-content">
        Действие
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="unit-name">
      <div class="products_table-content">
        Наименование единицы
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="price">
      <div class="products_table-content">
        Цена
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="quantity">
      <div class="products_table-content">
        Кол-во
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="product-name">
      <div class="products_table-content">
        Название товара
      </div>
      <div class="resizer"></div>
    </div>
    <div class="products_table-cell" id="total">
      <div class="products_table-content">
        Итого
      </div>
      <div class="resizer"></div>
    </div>
  </li>
  `,q=(o,l,r)=>`
    <li draggable="true" class="products_table-row body_row">
    <div class="products_table-cell body_cell" id="number">
      <div class="products_table-content body-content body-content-icon">
        <button class="drag">
          <svg width="11px" height="12px" viewBox="0 0 11 12" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Переместить</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Логистика-Copy-37" transform="translate(-270.000000, -316.000000)" fill="#A6B7D4">
                <g id="Group-2-Copy-7" transform="translate(254.000000, 222.000000)">
                  <g id="Group-Copy-3" transform="translate(1.000000, 78.000000)">
                    <g id="Group-11" transform="translate(15.000000, 15.000000)">
                      <path
                        d="M1,1 L10,1 C10.5522847,1 11,1.44771525 11,2 C11,2.55228475 10.5522847,3 10,3 L1,3 C0.44771525,3 5.11724585e-16,2.55228475 0,2 C-6.76353751e-17,1.44771525 0.44771525,1 1,1 Z M1,6 L10,6 C10.5522847,6 11,6.44771525 11,7 C11,7.55228475 10.5522847,8 10,8 L1,8 C0.44771525,8 5.11724585e-16,7.55228475 0,7 C-6.76353751e-17,6.44771525 0.44771525,6 1,6 Z M1,11 L10,11 C10.5522847,11 11,11.4477153 11,12 C11,12.5522848 10.5522847,13 10,13 L1,13 C0.44771525,13 5.11724585e-16,12.5522848 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z"
                        id="Combined-Shape"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <span>${r+1}</span>
      </div>
    </div>
    <div class="products_table-cell body_cell table_icon-deal" id="deal">
      <span class="table_cell-placeholder">Действие</span>
      <div class="products_table-content body-content body-content-icon body-content-icon-deal">
        <div class="delete"><button>Удалить</button></div>
        <button class="deal" data-id=${l}>
          <svg class="svg" width="3px" height="13px" viewBox="0 0 3 13" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Combined Shape</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Логистика-Copy-37" transform="translate(-314.000000, -361.000000)" fill="#A6B7D4">
                <g id="Group-2-Copy-7" transform="translate(254.000000, 222.000000)">
                  <g id="Group-Copy-5" transform="translate(1.000000, 123.000000)">
                    <g id="Group-12-Copy" transform="translate(59.000000, 16.000000)">
                      <path class="path"
                        d="M1.5,0 C2.32842712,-1.52179594e-16 3,0.671572875 3,1.5 C3,2.32842712 2.32842712,3 1.5,3 C0.671572875,3 1.01453063e-16,2.32842712 0,1.5 C-1.01453063e-16,0.671572875 0.671572875,1.52179594e-16 1.5,0 Z M1.5,5 C2.32842712,5 3,5.67157288 3,6.5 C3,7.32842712 2.32842712,8 1.5,8 C0.671572875,8 1.01453063e-16,7.32842712 0,6.5 C-1.01453063e-16,5.67157288 0.671572875,5 1.5,5 Z M1.5,10 C2.32842712,10 3,10.6715729 3,11.5 C3,12.3284271 2.32842712,13 1.5,13 C0.671572875,13 1.01453063e-16,12.3284271 0,11.5 C-1.01453063e-16,10.6715729 0.671572875,10 1.5,10 Z"
                        id="Combined-Shape"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="products_table-cell body_cell unit_name" id="unit-name">
      <span class="table_cell-placeholder">Наименование единицы</span>
      <div class="products_table-content body-content">
        ${o.pName}
      </div>
      <div class="list">
        <ul>
          <li>
            <b>Мраморный щебень</b> фр. 2-5 мм, 25кг
          </li>
          <li>
            <b>Мраморный щебень</b> фр. 2-5 мм, 25кг (белый)
          </li>
          <li>
            <b>Мраморный щебень</b> фр. 2-5 мм, 25кг (вайт)
          </li>
          <li>
            <b>Мраморный щебень</b> фр. 2-5 мм, 25кг, возврат
          </li>
          <li>
            <b>Мраморный щебень</b> фр. 2-5 мм, 25кг, 1т
          </li>
      </ul>
      </div>
    </div>
    <div class="products_table-cell body_cell" id="price">
      <span class="table_cell-placeholder">Цена</span>
      <div class="products_table-content body-content">${o.price}</div>
    </div>
    <div class="products_table-cell body_cell" id="quantity">
      <span class="table_cell-placeholder">Кол-во</span>
      <div class="products_table-content body-content">
      ${o.count}
      </div>
    </div>
    <div class="products_table-cell body_cell" id="product-name">
      <span class="table_cell-placeholder">Название</span>
      <div class="products_table-content body-content">
        ${o.name}
      </div>
    </div>
    <div class="products_table-cell body_cell" id="total">
      <span class="table_cell-placeholder">Итого</span>
      <div class="products_table-content body-content">
        ${o.total}
      </div>
    </div>
  </li>
  `,h=(o,l)=>{localStorage.setItem(o,JSON.stringify(l))},E=o=>JSON.parse(localStorage.getItem(o)),d=document.querySelector(".products_table-body"),x=document.querySelector(".add_button"),f=document.querySelector(".products_settings");console.log(f);let p=E("products")||[],y=0;const b=()=>{const o=S();d.innerHTML=o+p.map((e,c)=>q(e,e.id,c)).join(""),h("products",p),document.querySelectorAll(".body-content-icon-deal").forEach(e=>{const c=e.querySelector(".deal");c.addEventListener("click",u=>{e.classList.add("active");const a=e.querySelector(".delete");a.classList.toggle("show"),a.addEventListener("click",()=>{const n=Number(c.dataset.id);B(n)})})}),document.querySelectorAll(".body_row").forEach(e=>{e.addEventListener("dragstart",()=>{setTimeout(()=>{e.classList.add("dragging")})}),e.addEventListener("dragend",()=>{e.classList.remove("dragging")})});const i=e=>{e.preventDefault();const c=document.querySelector(".dragging"),a=[...d.querySelectorAll(".body_row:not(.dragging)")].find(n=>e.clientY<=n.offsetTop+n.offsetHeight/2);d.insertBefore(c,a)};d.addEventListener("dragover",i),d.addEventListener("dragenter",e=>{e.preventDefault()}),d.querySelectorAll(".unit_name").forEach(e=>{const c=e.querySelector(".products_table-content"),u=e.querySelector(".list");c.addEventListener("click",()=>{u.classList.toggle("show"),u.querySelectorAll("li").forEach(n=>{n.addEventListener("click",()=>{u.classList.remove("show");const g=n.textContent;c.textContent=g})})})});const s=d.getBoundingClientRect().height;document.onmousedown=e=>{let c;document.querySelectorAll(".resizer").forEach(a=>{if(e.target!==a)return;const n=e.target;n.style.height=`${s}px`,n.style.opacity="1";const g=n.closest(".products_table-cell"),_=document.querySelectorAll(`#${g.id}`),v=g.getBoundingClientRect();console.log(v);const w=n.getBoundingClientRect();console.log(w),document.onmousemove=m=>{const C=m.pageX-v.right;c=v.width+C,_.forEach(L=>{L.style.width=`${c}px`}),document.body.style.cursor="col-resize"},document.onmouseup=m=>{n.style.height="100%",n.style.opacity="0",document.body.style.cursor="default",document.onmousemove=null,document.onmouseup=null}})}};f.addEventListener("click",()=>{console.log(1);const o=document.querySelector(".products_columns-display"),l=document.querySelector(".products_display-list"),r=document.querySelector(".products_display-btn"),i=l.querySelectorAll("li");l.classList.contains("show")&&(l.classList.toggle("show"),r.classList.toggle("show")),o.classList.toggle("show"),o.addEventListener("click",t=>{i.forEach(s=>{const e=s.querySelector("input");if(t.target!==e&&t.target!==s)l.classList.toggle("show"),r.classList.toggle("show");else return})}),i.forEach(t=>{const s=t.querySelector("input");s.addEventListener("click",()=>{document.querySelectorAll(`#${s.name}`).forEach(c=>{s.checked?c.classList.remove("hide"):c.classList.add("hide")})})})});const B=o=>{p=p.filter(l=>l.id!==o),b()};x.addEventListener("click",()=>{const o={id:y,pName:"Мраморный щебень фр. 2-5 мм, 25кг",price:1231,count:12,name:"Мраморный щебень",total:1231};y++,p.push(o),h("products",p),d.innerHTML="",b()});b();
