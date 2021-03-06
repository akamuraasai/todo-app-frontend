import React from 'react';
import IconButton from '../template/iconButton';

export default props => {

    const carregaLinhas = () => {
        const lista = props.lista || [];

        return lista.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={ tarefa.feito ? 'tarefa-concluida' : '' }>{tarefa.descricao}</td>
                <td>
                    <IconButton style="success" icon="check" onClick={() => props.funcaoFeito(tarefa)} hide={tarefa.feito} />
                    <IconButton style="warning" icon="undo" onClick={() => props.funcaoDesfeito(tarefa)} hide={!tarefa.feito} />
                    <IconButton style="danger" icon="trash-o" onClick={() => props.funcaoRemover(tarefa)} hide={!tarefa.feito} />
                </td>
            </tr>
        ));
    };

    return (<table className="table listagem">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="col-xs-2 col-sm-1 col-md-1 col-lg-1">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {carregaLinhas()}
                </tbody>
            </table>
    )
};