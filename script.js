document.querySelector('#botaoAdd').onclick = function(){
    if(document.querySelector('#novatarefa input').value.length == 0){
        alert("Por favor, digite uma tarefa!")
    }
    else{
        document.querySelector('#tarefas').innerHTML += `
            <div class="tarefa">
                <span id="nometarefa">
                    ${document.querySelector('#novatarefa input').value}
                </span>
                <button class="deletar">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".deletar");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".tarefa");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#novatarefa input").value = "";
    }
}