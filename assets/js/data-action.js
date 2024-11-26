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
        displayPeopleChart(regionData.regionCharacteristics);

        // 기타 추가 데이터 출력
        //$('#productsProduction-fruits').html(`${regionData.productsProduction.fruits.toLocaleString()}kg`);
        //$('#productsProduction-mushrooms').html(`${regionData.productsProduction.mushrooms.toLocaleString()}kg`);
    });
});