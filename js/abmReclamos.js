$(document).ready(() => {
   
    $(".btn-borrar").on("click", () => {
        event.preventDefault();
        bootbox.confirm("<b style='text-align: center'>Esta seguro que quiere borrar el reclamo???</b>", () => {
            console.log("Borraste al reclamo")
        })
    })
})