(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))b(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&b(v)}).observe(document,{childList:!0,subtree:!0});function g(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function b(l){if(l.ep)return;l.ep=!0;const c=g(l);fetch(l.href,c)}})();const S=()=>`
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
  `,q=(o,d,g)=>`
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
        <span>${g+1}</span>
      </div>
    </div>
    <div class="products_table-cell body_cell table_icon-deal" id="deal">
      <span class="table_cell-placeholder">Действие</span>
      <div class="products_table-content body-content body-content-icon body-content-icon-deal">
        <div class="delete"><button>Удалить</button></div>
        <button class="deal" data-id=${d}>
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
  `,_=(o,d)=>{localStorage.setItem(o,JSON.stringify(d))},E=o=>JSON.parse(localStorage.getItem(o)),a=document.querySelector(".products_table-body"),x=document.querySelector(".add_button");let p=E("products")||[],f=0;const y=()=>{const o=S();a.innerHTML=o+p.map((e,s)=>q(e,e.id,s)).join(""),_("products",p),document.querySelectorAll(".body-content-icon-deal").forEach(e=>{const s=e.querySelector(".deal");s.addEventListener("click",i=>{e.classList.add("active");const r=e.querySelector(".delete");r.classList.toggle("show"),r.addEventListener("click",()=>{const t=Number(s.dataset.id);B(t)})})}),document.querySelectorAll(".body_row").forEach(e=>{e.addEventListener("dragstart",()=>{setTimeout(()=>{e.classList.add("dragging")})}),e.addEventListener("dragend",()=>{e.classList.remove("dragging")})});const b=e=>{e.preventDefault();const s=document.querySelector(".dragging"),r=[...a.querySelectorAll(".body_row:not(.dragging)")].find(t=>e.clientY<=t.offsetTop+t.offsetHeight/2);a.insertBefore(s,r)};a.addEventListener("dragover",b),a.addEventListener("dragenter",e=>{e.preventDefault()}),document.querySelector(".products_settings").addEventListener("click",()=>{const e=document.querySelector(".products_columns-display"),s=document.querySelector(".products_display-list"),i=document.querySelector(".products_display-btn"),r=s.querySelectorAll("li");s.classList.contains("show")&&(s.classList.toggle("show"),i.classList.toggle("show")),e.classList.toggle("show"),e.addEventListener("click",t=>{r.forEach(n=>{const m=n.querySelector("input");if(t.target!==m&&t.target!==n)s.classList.toggle("show"),i.classList.add("show");else return})}),r.forEach(t=>{const n=t.querySelector("input");n.addEventListener("click",()=>{document.querySelectorAll(`#${n.name}`).forEach(u=>{n.checked?u.classList.remove("hide"):u.classList.add("hide")})})})}),a.querySelectorAll(".unit_name").forEach(e=>{const s=e.querySelector(".products_table-content"),i=e.querySelector(".list");s.addEventListener("click",()=>{i.classList.toggle("show"),i.querySelectorAll("li").forEach(t=>{t.addEventListener("click",()=>{i.classList.remove("show");const n=t.textContent;s.textContent=n})})})});const v=a.getBoundingClientRect().height;document.onmousedown=e=>{let s;document.querySelectorAll(".resizer").forEach(r=>{if(e.target!==r)return;const t=e.target;t.style.height=`${v}px`,t.style.opacity="1";const n=t.closest(".products_table-cell"),m=document.querySelectorAll(`#${n.id}`),u=n.getBoundingClientRect();console.log(u);const w=t.getBoundingClientRect();console.log(w),document.onmousemove=h=>{const C=h.pageX-u.right;s=u.width+C,m.forEach(L=>{L.style.width=`${s}px`}),document.body.style.cursor="col-resize"},document.onmouseup=h=>{t.style.height="100%",t.style.opacity="0",document.body.style.cursor="default",document.onmousemove=null,document.onmouseup=null}})}},B=o=>{p=p.filter(d=>d.id!==o),y()};x.addEventListener("click",()=>{const o={id:f,pName:"Мраморный щебень фр. 2-5 мм, 25кг",price:1231,count:12,name:"Мраморный щебень",total:1231};f++,p.push(o),_("products",p),a.innerHTML="",y()});y();
