
let printData = () => {
    let divToPrint = document.getElementById('table-reclamos');
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
}
