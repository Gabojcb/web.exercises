export const addInput = (item, container, tpl) => {
        item.addEventListener("focus", ()=> {
            container.insertAdjacentHTML("beforeend", tpl);  
        });
}