function CopyButton({ report }) {

    async function copyReport() {

        await navigator.clipboard.writeText(report);

        alert("Report copied successfully.");

    }

    return (

        <button
            onClick={copyReport}
            className="rounded-lg bg-indigo-600 px-5 py-2 hover:bg-indigo-500"
        >
            📋 Copy
        </button>

    );

}

export default CopyButton;