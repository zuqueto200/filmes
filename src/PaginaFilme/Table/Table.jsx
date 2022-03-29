import "./style.css"



export function Table(props) {
    const filme = props.filme




    return (
        <>

            <table className="tabelaDualAudio">

                <thead>
                    <tr >
                        <th colSpan={6}>Baixar {filme.title} - <strong>DUAL AUDIO</strong>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>4k</td>
                        <td>DVD - Rip</td>
                        <td>20 GB</td>
                        <td>MP4</td>
                        <td><button>BAIXAR</button></td>
                    </tr>
                    <tr>
                        <td>1080p</td>
                        <td>BLU - RAY</td>
                        <td>12.50 GB</td>
                        <td>MKV</td>
                        <td><button>BAIXAR</button></td>
                    </tr>
                    <tr>
                        <td>720p</td>
                        <td>CAM</td>
                        <td>20 GB</td>
                        <td>AVI</td>
                        <td><button>BAIXAR</button></td>
                    </tr>


                </tbody>
            </table>



            <br />
            <table className="tabelaLegendado">

<thead>
    <tr >
        <th colSpan={6}> Baixar {filme.title} - <strong>LEGENDADO</strong>
        </th>
    </tr>
</thead>

<tbody>
    <tr>
        <td>4k</td>
        <td>DVD - Rip</td>
        <td>20 GB</td>
        <td>MP4</td>
        <td><button>BAIXAR</button></td>
    </tr>
    <tr>
        <td>1080p</td>
        <td>BLU - RAY</td>
        <td>12.50 GB</td>
        <td>MKV</td>
        <td><button>BAIXAR</button></td>
    </tr>
    <tr>
        <td>720p</td>
        <td>CAM</td>
        <td>20 GB</td>
        <td>AVI</td>
        <td><button>BAIXAR</button></td>
    </tr>


</tbody>
</table>



        </>
    )
}