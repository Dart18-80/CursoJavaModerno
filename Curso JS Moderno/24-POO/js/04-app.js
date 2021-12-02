class Cliente{
    #nombre;

    setNombre (nombre){
        this.#nombre = nombre;
    }
    
    getNombre(){
        return this.#nombre;
    }
}

const Juan = new Cliente();
Juan.setNombre('Juan');

console.log(Juan.getNombre());