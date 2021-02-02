//show data dunia
function showDataDunia() {
    const getDataDuniaSembuh = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/sembuh`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaSembuh(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaSembuh = (valueSembuh) => {
        const kasusSembuhDuniaElement = document.querySelector("#total_kasus_sembuh_dunia");
        kasusSembuhDuniaElement.innerHTML = `${valueSembuh.value}<br/>`;
    }

    const getDataDuniaPositif = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/positif`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaPositif(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaPositif = (valuePositif) => {
        const kasusPositifDuniaElement = document.querySelector("#total_kasus_positif_dunia");
        kasusPositifDuniaElement.innerHTML = `${valuePositif.value}<br/>`;
    }

    const getDataDuniaMeninggal = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/meninggal`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaMeninggal(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaMeninggal = (valueMeninggal) => {
        const kasusMeninggalDuniaElement = document.querySelector("#total_kasus_meninggal_dunia");
        kasusMeninggalDuniaElement.innerHTML = `${valueMeninggal.value}<br/>`;
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getDataDuniaSembuh();
    getDataDuniaPositif();
    getDataDuniaMeninggal();
} 

//show data indonesia
function showDataIndonesia() {
    const getDataIndonesia = () => {
        fetch(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataIndonesiaSembuh(responseJson);
            renderDataIndonesiaPositif(responseJson);
            renderDataIndonesiaMeninggal(responseJson);
            renderDataIndonesiaDirawat(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataIndonesiaSembuh = (valueSembuh) => {
        const kasusSembuhIndonesiaElement = document.querySelector("#total_kasus_sembuh_indonesia");
        kasusSembuhIndonesiaElement.innerHTML = `${valueSembuh.sembuh}<br/>`;
    }

    const renderDataIndonesiaPositif = (valuePositif) => {
        const kasusPositifIndonesiaElement = document.querySelector("#total_kasus_positif_indonesia");
        kasusPositifIndonesiaElement.innerHTML = `${valuePositif.positif}<br/>`;
    }

    const renderDataIndonesiaMeninggal = (valueMeninggal) => {
        const kasusMeninggalIndonesiaElement = document.querySelector("#total_kasus_meninggal_indonesia");
        kasusMeninggalIndonesiaElement.innerHTML = `${valueMeninggal.meninggal}<br/>`;
    }

    const renderDataIndonesiaDirawat = (valueDirawat) => {
        const kasusDirawatIndonesiaElement = document.querySelector("#total_kasus_dirawat_indonesia");
        kasusDirawatIndonesiaElement.innerHTML = `${valueDirawat.dirawat}<br/>`;
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getDataIndonesia();
}

//show waktu update terakhir
function showUpdateTerakhir() {
    const getUpdateTerakhir = () => {
        fetch(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderupdateTerakhir(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderupdateTerakhir = (valueUpdateTerakhir) => {
        const updateTerakhirElement = document.querySelector("#update_terakhir");
        updateTerakhirElement.innerHTML = `${valueUpdateTerakhir.lastUpdate}<br/>`;
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getUpdateTerakhir();
}

//show data provinsi
function showDataProvinsi() {
    const getDataProvinsi = () => {
        fetch(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {    
            renderDataProvinsi(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        }); 
    }
    
    const renderDataProvinsi = (dataProvinsi) => {
        const tableDataProvinsi = document.querySelector("#table_kasus_provinsi_data");
        let idNumber = 1;
        tableDataProvinsi.innerHTML = "";
        dataProvinsi.forEach(caseData => {
            tableDataProvinsi.innerHTML += `
            <tr>
                <td>${idNumber}</td>
                <td>${caseData.Provinsi}</td>
                <td>${caseData.Kasus_Semb}</td>
                <td>${caseData.Kasus_Posi}</td>
                <td>${caseData.Kasus_Meni}</td>
            </tr>
            `;
            idNumber++;
        });
    }
    
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getDataProvinsi();
}

showUpdateTerakhir();
showDataDunia();
showDataIndonesia();
showDataProvinsi();