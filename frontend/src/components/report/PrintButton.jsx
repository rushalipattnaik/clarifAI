function PrintButton() {

    function printReport() {

        window.print();

    }

    return (

        <button

            onClick={printReport}

            className="rounded-lg bg-slate-700 px-5 py-2 hover:bg-slate-600 transition"

        >

            🖨 Print

        </button>

    );

}

export default PrintButton;