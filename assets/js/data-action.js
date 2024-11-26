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
    });
});