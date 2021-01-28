export default class Sample {

    $target = null
    constructor($target) {
        this.$target = $target

        const $h1 = document.createElement("h1")
        $h1.innerText = "샘플 프로젝트"

        const $inputContainer = document.createElement("div");
        $inputContainer.innerHTML =
            `<div>
                <input type='text' placeholder='todo'/>
                <button>Register</button>
            </div>`

        $target.appendChild($h1);
        $target.appendChild($inputContainer);
    }
}