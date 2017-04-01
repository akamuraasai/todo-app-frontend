import React from 'react';
import IconButton from '../template/iconButton';

export default props => {

    const carregaLinhas = () => {
        const lista = props.lista || [];

        return lista.map(tarefa => (
            <tr key={tarefa._id}>
                <td>{tarefa.descricao}</td>
                <td>
                    <IconButton style="danger" icon="trash-o" onClick={() => props.funcaoRemover(tarefa)}/>
                </td>
            </tr>
        ));
    };

    return (<table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {carregaLinhas()}
                </tbody>
            </table>
    )
};