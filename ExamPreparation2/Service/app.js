window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");

    let receivedOrders = document.getElementById("received-orders");
    let completed = document.getElementById("completed-orders");

    let btnSubmit = document.getElementsByTagName("button")[0].addEventListener('click', sendForm);
    let btnClear = document.getElementsByClassName("clear-btn")[0].addEventListener('click', clearAllOrders)

    function sendForm(e) {
        e.preventDefault();

        let typeValue = productType.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

                if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let buttonStart = document.createElement("button");
        let buttonFinish = document.createElement("button");

        h2.textContent = `Product type for repair: ${typeValue}`;
        h3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;
        h4.textContent = `Description of the problem: ${descriptionValue}`;
        div.classList.add("container");
        buttonStart.classList.add("start-btn");
        buttonStart.textContent = "Start repair";
        buttonFinish.classList.add("finish-btn");
        buttonFinish.textContent = "Finish repair";
        buttonFinish.setAttribute("disabled", true);

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(buttonStart);
        div.appendChild(buttonFinish);

        receivedOrders.appendChild(div);
        
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";

        buttonStart.addEventListener('click', startRepairing)

        function startRepairing(e) {
            buttonStart.setAttribute('disabled', true);
            buttonFinish.removeAttribute('disabled');

            buttonFinish.addEventListener('click', completeRepair);

            function completeRepair(e){
                let h2 = e.target.parentElement.children[0].textContent;
                let h3 = e.target.parentElement.children[1].textContent;
                let h4 = e.target.parentElement.children[2].textContent;

                let divC = document.createElement("div");
                let h2C = document.createElement("h2");
                let h3C = document.createElement("h3");
                let h4C = document.createElement("h4");

                divC.classList.add("container");
                h2C.textContent = h2;
                h3C.textContent = h3;
                h4C.textContent = h4;

                divC.appendChild(h2C);
                divC.appendChild(h3C);
                divC.appendChild(h4C);

                completed.appendChild(divC);

                div.remove();

            }
        }

    }

    function clearAllOrders(e) {
        let section = e.target.parentElement;
        let divs = Array.from(section.getElementsByClassName("container"));

        if(!divs) {
            return;
        }

        for (const div of divs) {
            div.remove();
        }


    } 
}