const renderer = new Renderer();
const model = new DataModel();

$(".generate-user-btn").on("click",function(){
    model.generateUser().then(()=>{
        renderer.render(model.getUserCard())
    })
})

