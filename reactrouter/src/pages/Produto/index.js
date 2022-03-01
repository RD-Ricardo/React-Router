import {useParams} from 'react-router-dom';
export default function Produto()
{

    const { id } = useParams();
    return(
        <>
            <h1>Pagina de Produtos{id}</h1>
        </>
    );
}