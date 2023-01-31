const CalculateHTB = () => {
    const calcBtn = document.querySelector('#Calculate');
    calcBtn.addEventListener('click', () => {
        let morgtageSellPrice = document.querySelector('#mortgageSellPrice').value;
        let morgtageRemaining = document.querySelector('#mortgageRemaining').value;

        if(morgtageSellPrice != "" && morgtageRemaining != "") {
            morgtageSellPrice = morgtageSellPrice.replace(/\,/g,'');
            morgtageRemaining = morgtageRemaining.replace(/\,/g,'');
            
            let htbValue = Number((morgtageSellPrice / 100) * 20);
            let htbResult = morgtageSellPrice - htbValue - morgtageRemaining;
            if(htbResult > 0) {
                document.querySelector('#result').classList.remove('negative');
                document.querySelector('#result').classList.add('positive');
            }
            else {
                document.querySelector('#result').classList.remove('positive');
                document.querySelector('#result').classList.add('negative');
            }
            document.querySelector('#result').innerHTML = `<h6>You will have</h6> <span>£${htbResult.toLocaleString()}</span>`;
        }

        else {
            document.querySelector('#result').innerText = "Please fill in both inputs..."
        }

    });
}

const CommaInput = (elem) => {
    let inputElement = document.querySelector(elem);
    inputElement.addEventListener("keyup", ()=>{
        var tempNumber = inputElement.value.replace(/,/gi, "");
        var commaSeparatedNumber = tempNumber.split(/(?=(?:\d{3})+$)/).join(",");
        inputElement.value = commaSeparatedNumber;
    })
}


const SetYear = () => {
    const d = new Date();
    document.querySelector('footer h4 span').innerText = d.getFullYear();
}


CommaInput('#mortgageSellPrice');
CommaInput('#mortgageRemaining');
SetYear();
CalculateHTB();
