import React from 'react';
import '../CSS/NotFound.css';

function NotFound(){
    return(
        <div className="not-found">
            <h1>Erro 404</h1>
            <h1>Página Não Encontrada</h1>
            <p>Ops! A página que você está procurando não existe.</p>
        </div>
    );
}

export default NotFound;
