const usuarios =[
    {
        login: 'Messi',
        pass: 'Messi'
    },{
        login: 'Suarez',
        pass: 'Suarez'
    
    }]
    
    const clicar = document.getElementById ("btn")
    
    clicar.addEventListener("click",
    function apertar (){
        document.write("Dados enviados")
        
    });
    
        let pegaUsuario = document.getElementById("name").value 
        let pegaSenha = document.getElementById("password").value
    
        for(let i in nomes){
            if(pegaUsuario==usuarios[i].login){
              
            }
        }