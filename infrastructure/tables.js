class Tables {
    init(connection) {
        this.connection = connection

        this.registerComputers()
    }

    registerComputers() {
        // Create a new table if it does not already exist
        const sql = 'CREATE TABLE IF NOT EXISTS Computers (id int NOT NULL AUTO_INCREMENT, marca varchar(15) NOT NULL, modelo varchar(25) NOT NULL, patrimonio varchar(8) NOT NULL, status varchar(25) NOT NULL, data datetime NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.connection.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela de computadores, criada com sucesso!')
            }
        })
    }
}

module.exports = new Tables