import { useNavigate} from "react-router";
import type { TipoProduto } from "../../types/types";
import { useForm } from "react-hook-form";

export default function CadProduto() {
    document.title = "Cadastro de Produtos";

    const { register, handleSubmit, formState: { errors } } = useForm<TipoProduto>({
        defaultValues: { id: "", nome: "", preco: 0, estoque: 0, avatar: "" },
        mode: "onChange"
    });
 
    const navigate = useNavigate();

    const onSubmit = async (data: TipoProduto) => {
        try {

            const response = await fetch(`http://localhost:3001/produtos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            //ERRO
            if (!response.ok) {
                throw new Error(`Falha no cadastro do produto... ${response.status} - ${response.statusText}`);
            }

            //SUCESSO
            alert("Produto cadastrado com sucesso!");
            //REDIRECT
            navigate("/produtos");

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="frmCad">
                <fieldset>
                    <legend>Dados do Produto</legend>
                    <div>
                        <label htmlFor="nome">Nome do Produto </label>
                        <input type="text" id="nome" {...register("nome", { required: "É obrigatório um nome para o produto!", minLength: { value: 3, message: "Permitido apenas nomes com no mínimo 3 caracteres!" } })} />
                        {errors.nome?.message && <span style={{ color: "#ff0000" }}>{errors.nome?.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="preco">Preço </label>
                        <input type="number" step={0.1} id="preco" {...register("preco", { required: "É obrigatório digitar um valor!", min: { value: 1, message: "Permitidos apenas valores maiores que zero!" } })} />
                        {errors.preco?.message && <span style={{ color: "#ff0000" }}>{errors.preco?.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="estoque">Estoque </label>
                        <input type="number" step={1} id="estoque" {...register("estoque", { required: "É obrigatório digitar um valor!", min: { value: 1, message: "Permitidos apenas valores maiores que zero!" } })} />
                        {errors.estoque?.message && <span style={{ color: "#ff0000" }}>{errors.estoque?.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="avatar">Imagem do Produto </label>
                        <input type="url" id="avatar" {...register("avatar", { required: "É obrigatório uma iamgem para o produto!", minLength: { value: 10, message: "Permitido apenas nomes com no mínimo 10 caracteres!" }})} />
                        {errors.avatar?.message && <span style={{ color: "#ff0000" }}>{errors.avatar?.message}</span>}
                    </div>
                    <div>
                        <button type="submit">CADASTRAR</button>
                    </div>

                </fieldset>
            </form>
        </main>
    )
}