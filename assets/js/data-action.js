$(document).ready(function () {
    /*
     * 지역 선택 Selectbox 설정
     */
    const uniqueParents = [...new Set(regions.map(region => region.parent))];
    uniqueParents.forEach(parent => {
        $('#region-parent').append(`<option value="${parent}">${parent}</option>`);
    });

    // 시/도 변경 시 군/구 옵션 갱신
    $('#region-parent').change(function () {
        const selectedParent = $(this).val();
        $('#region-name').empty().append('<option value="">군/구를 선택하세요</option>');

        regions.filter(region => region.parent === selectedParent)
            .forEach(region => {
                $('#region-name').append(`<option value="${region.name}">${region.name}</option>`);
            });
    });

    $('.btn01_ss input[type="submit"]').click(function (event) {
        event.preventDefault();
        $(".guide-wrap, .data-wrap").addClass("on");

        // 선택된 부모 지역 (시/도)
        const selectedParent = $('#region-parent').val();
        // 선택된 자식 지역 (군/구)
        const selectedRegion = $('#region-name').val();

        // 선택된 지역에 해당하는 데이터를 필터링
        const regionData = regions.find(region =>
            region.parent === selectedParent && region.name === selectedRegion
        );

        if (!regionData) {
            alert('해당 지역의 데이터를 찾을 수 없습니다.');
            return false;
        }

        // 데이터가 존재하는 경우 원하는 동작 수행
        console.log(regionData);

        // 인구 현황
        $('h4.content_title').html(`${selectedParent} ${selectedRegion}의 주요 특징`);
        $('#populationStatus-population').html(`${regionData.populationStatus.population['2023'].toLocaleString()}`);
        $('#populationStatus-forestryPopulation').html(`${regionData.populationStatus.forestryPopulation['2020'].toLocaleString()}`);
        $('#populationStatus-households').html(`${regionData.populationStatus.households['2023'].toLocaleString()}`);
        $('#populationStatus-forestryHouseholds').html(`${regionData.populationStatus.forestryHouseholds['2020'].toLocaleString()}`);
        $('#populationStatus-averageAge').html(`${regionData.populationStatus.averageAge['2023']}`);

        // 안전
        $('#safety-trafficAccidents').html(`${formatNumber(regionData.safety.trafficAccidents['2022'])}`);
        $('#safety-fires').html(`${formatNumber(regionData.safety.fires['2022'])}`);
        $('#safety-crimes').html(`${formatNumber(regionData.safety.crimes['2022'])}`);
        $('#safety-publicSafety').html(`${formatNumber(regionData.safety.publicSafety['2022'])}`);
        $('#safety-suicides').html(`${formatNumber(regionData.safety.suicides['2022'])}`);
        $('#safety-infectiousDiseases').html(`${formatNumber(regionData.safety.infectiousDiseases['2022'])}`);

        // 시설정보
        $('#education-kindergartens').html(`${formatNumber(regionData.education.kindergartens['2024'])}`);
        $('#education-elementarySchools').html(`${formatNumber(regionData.education.elementarySchools['2024'])}`);
        $('#education-universities').html(`${formatNumber(regionData.education.universities['2024'])}`);
        $('#education-privateInstitutes').html(`${formatNumber(regionData.education.privateInstitutes['2023'])}`);
        $('#medical-hospitals').html(`${formatNumber(regionData.medical.hospitals['2024'])}`);
        $('#medical-pharmacies').html(`${formatNumber(regionData.medical.hospitals['2024'])}`);
        $('#culturalFacilities-cultural').html(`${formatNumber(regionData.culturalFacilities.cultural['2022'])}`);
        $('#culturalFacilities-socialWelfare').html(`${formatNumber(regionData.culturalFacilities.socialWelfare['2021'])}`);
        $('#culturalFacilities-seniorLeisureWelfare').html(`${formatNumber(regionData.culturalFacilities.seniorLeisureWelfare['2023'])}`);

        // 인구 현황
        displayPeopleChart(regionData.regionCharacteristics);

        // 날씨
        displayTempChart(regionData.weather.temperature);
        displayRainChart(regionData.weather.precipitation);

        // 생산현황
        displayWonChart(regionData.productsProduction);

        // 부동산 정보(원/m2)
        displayGreenZoneChart(regionData.realEstate.greenZone);
        displayNonUrbanZoneChart(regionData.realEstate.nonUrbanZone);

        // 멘토
        renderMentors(regionData.supportSystem.mento);

        // Step3
        renderOrganizationLinks(regionData.supportSystem.organizations);
    });
});

// 연도별 색상 설정 함수
function getColorForYear(year) {
    const colors = {
        "2021": "#679951",
        "2022": "#dfb162",
        "2023": "#ed6d85",
    };
    return colors[year] || "#000000"; // 기본 색상
}

function formatNumber(value) {
    if (value === 0) {
        return '-'; // 값이 0이면 '-' 출력
    }
    return value.toLocaleString(); // 자릿수 구분 적용
}

// 기존 링크를 제거하고 새로 그리기
function renderOrganizationLinks(organizations) {
    const botbox = document.querySelector("#step3 .botbox");
    botbox.innerHTML = "";

    // 2. organizations 배열을 순회하여 <a> 요소 생성 및 추가
    organizations.forEach((organization) => {
        const linkElement = document.createElement("a");
        linkElement.href = organization.url;
        linkElement.className = "btn01";
        linkElement.target = "_blank";
        linkElement.title = "새창열기";
        linkElement.textContent = `${organization.title} 바로가기`;
        botbox.appendChild(linkElement);
    });
}

function renderMentors(mentorIds) {
    const filteredMentors = mentors.filter(mentor => mentorIds.includes(mentor.id));

    let html = ''; // HTML 문자열 초기화
    filteredMentors.forEach(mentor => {
        html += `
            <tr>
                <td class="nobor_l">${mentor.id}</td>
                <td>${mentor.name}</td>
                <td>${mentor.mainField}</td>
                <td>${mentor.subItems}</td>
                <td>${mentor.region}</td>
                <td class="t_newlaout">
                    <ul class="dot-list">
                        ${mentor.coreTech.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </td>
            </tr>
        `;
    });

    $('#mentorList tbody').html(html);
}

