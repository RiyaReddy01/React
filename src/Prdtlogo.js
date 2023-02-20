

function Prdtlogo(){
    return(
        <img src= "data:image/png;base64,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">

        </img>
    );
}
export default Prdtlogo;