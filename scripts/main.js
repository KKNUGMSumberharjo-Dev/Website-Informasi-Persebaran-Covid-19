//show data dunia
function showDataDunia() {
    const getDataDuniaSembuh = () => {
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaSembuh(responseJson.recovered);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaSembuh = (valueSembuh) => {
        const kasusSembuhDuniaElement = document.querySelector("#total_kasus_sembuh_dunia");
        kasusSembuhDuniaElement.innerHTML = `${parseFloat(valueSembuh.value).toLocaleString('en')}<br/>`;
    }

    const getDataDuniaPositif = () => {
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaPositif(responseJson.confirmed);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaPositif = (valuePositif) => {
        const kasusPositifDuniaElement = document.querySelector("#total_kasus_positif_dunia");
        kasusPositifDuniaElement.innerHTML = `${parseFloat(valuePositif.value).toLocaleString('en')}<br/>`;
    }

    const getDataDuniaMeninggal = () => {
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => {
           return response.json();
        })
        .then(responseJson => {
            renderDataDuniaMeninggal(responseJson.deaths);
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataDuniaMeninggal = (valueMeninggal) => {
        const kasusMeninggalDuniaElement = document.querySelector("#total_kasus_meninggal_dunia");
        kasusMeninggalDuniaElement.innerHTML = `${parseFloat(valueMeninggal.value).toLocaleString('en')}<br/>`;
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
        kasusSembuhIndonesiaElement.innerHTML = `${parseFloat(valueSembuh.sembuh).toLocaleString('en')}<br/>`;
    }

    const renderDataIndonesiaPositif = (valuePositif) => {
        const kasusPositifIndonesiaElement = document.querySelector("#total_kasus_positif_indonesia");
        kasusPositifIndonesiaElement.innerHTML = `${parseFloat(valuePositif.positif).toLocaleString('en')}<br/>`;
    }

    const renderDataIndonesiaMeninggal = (valueMeninggal) => {
        const kasusMeninggalIndonesiaElement = document.querySelector("#total_kasus_meninggal_indonesia");
        kasusMeninggalIndonesiaElement.innerHTML = `${parseFloat(valueMeninggal.meninggal).toLocaleString('en')}<br/>`;
    }

    const renderDataIndonesiaDirawat = (valueDirawat) => {
        const kasusDirawatIndonesiaElement = document.querySelector("#total_kasus_dirawat_indonesia");
        kasusDirawatIndonesiaElement.innerHTML = `${parseFloat(valueDirawat.dirawat).toLocaleString('en')}<br/>`;
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
                <td>${parseFloat(caseData.Kasus_Semb).toLocaleString('en')}</td>
                <td>${parseFloat(caseData.Kasus_Posi).toLocaleString('en')}</td>
                <td>${parseFloat(caseData.Kasus_Meni).toLocaleString('en')}</td>
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