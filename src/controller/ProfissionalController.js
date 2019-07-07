const conn = require('../db/connection');

const pool = conn.createConnection();

const addProfissional = (request,response) => {
    const {nome,cpf} = request.body;
    pool.query(
        'INSERT INTO profissional (nome,cpf) VALUES ($1,$2)',
        [nome,cpf],
        (error,res)=>{
            
            if(error){
                throw error;
            }
            
            response.status(201).send('Profissional inserido com sucesso');
        });
}

const updateProfissional = (request,response) =>{
    const id = parseInt(request.params.id);
    const {nome,cpf} = request.body;

    pool.query(
        'UPDATE profissional SET nome=$1, cpf=$2 WHERE id=$3',
        [nome,cpf,id],
        (error, res) => {
            if(error){
                throw error;
            }
            response.status(200).send(`Profissional com ID ${id} modificado com sucesso`);
        }
    );
}

const searchProfissional = (request,response) => {
    pool.query('SELECT * FROM profissional',(error,res) => {
        if(error){
            throw error;
        }
        response.status(200).json(res.rows);
    });

}

const deleteProfissional = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(
        'DELETE FROM profissional WHERE id=$1',
        [id],
        (error, res) => {
            if(error){
                throw error;
            }
            response.status(200).send(`Profissional com ID ${id} excluído com sucesso`);
        }
    );
}

module.exports = {
    addProfissional,
    updateProfissional,
    searchProfissional,
    deleteProfissional,
}