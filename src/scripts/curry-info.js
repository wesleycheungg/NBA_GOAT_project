class CurryInfo{
    constructor(ele){
        this.ele = ele

        this.ele.addEventListener("mouseover", event => {
            console.log("Mouse In")
        });
    }

}

export default CurryInfo



