let originalRankedProducts;
let originalPriority;
$(document).ready(function () {
  /*
   * 지역 선택 Selectbox 설정
   */
  const uniqueParents = [...new Set(regions.map((region) => region.parent))];
  uniqueParents.forEach((parent) => {
    $("#region-parent").append(`<option value="${parent}">${parent}</option>`);
  });

  // 시/도 변경 시 군/구 옵션 갱신
  $("#region-parent").change(function () {
    const selectedParent = $(this).val();
    $("#region-name")
      .empty()
      .append('<option value="">군/구를 선택하세요</option>');

    regions
      .filter((region) => region.parent === selectedParent)
      .forEach((region) => {
        $("#region-name").append(
          `<option value="${region.name}">${region.name}</option>`
        );
      });
  });

  $('.btn01_ss input[type="submit"]').click(function (event) {
    event.preventDefault();
    $(".guide-wrap, .data-wrap").addClass("on");

    // 선택된 부모 지역 (시/도)
    const selectedParent = $("#region-parent").val();
    // 선택된 자식 지역 (군/구)
    const selectedRegion = $("#region-name").val();

    // 선택된 지역에 해당하는 데이터를 필터링
    const regionData = regions.find(
      (region) =>
        region.parent === selectedParent && region.name === selectedRegion
    );

    if (!regionData) {
      alert("해당 지역의 데이터를 찾을 수 없습니다.");
      return false;
    }

    // 데이터가 존재하는 경우 원하는 동작 수행
    console.log(regionData);

    // 인구 현황
    $("h4.content_title").html(
      `${selectedParent} ${selectedRegion}의 주요 특징`
    );
    $("#populationStatus-population").html(
      `${regionData.populationStatus.population["2023"].toLocaleString()}`
    );
    $("#populationStatus-forestryPopulation").html(
      `${regionData.populationStatus.forestryPopulation[
        "2020"
      ].toLocaleString()}`
    );
    $("#populationStatus-households").html(
      `${regionData.populationStatus.households["2023"].toLocaleString()}`
    );
    $("#populationStatus-forestryHouseholds").html(
      `${regionData.populationStatus.forestryHouseholds[
        "2020"
      ].toLocaleString()}`
    );
    $("#populationStatus-averageAge").html(
      `${regionData.populationStatus.averageAge["2023"]}`
    );

    // 안전
    $("#safety-trafficAccidents").html(
      `${formatNumber(regionData.safety.trafficAccidents["2022"])}`
    );
    $("#safety-fires").html(`${formatNumber(regionData.safety.fires["2022"])}`);
    $("#safety-crimes").html(
      `${formatNumber(regionData.safety.crimes["2022"])}`
    );
    $("#safety-publicSafety").html(
      `${formatNumber(regionData.safety.publicSafety["2022"])}`
    );
    $("#safety-suicides").html(
      `${formatNumber(regionData.safety.suicides["2022"])}`
    );
    $("#safety-infectiousDiseases").html(
      `${formatNumber(regionData.safety.infectiousDiseases["2022"])}`
    );

    // 시설정보
    $("#education-kindergartens").html(
      `${formatNumber(regionData.education.kindergartens["2024"])}`
    );
    $("#education-elementarySchools").html(
      `${formatNumber(regionData.education.elementarySchools["2024"])}`
    );
    $("#education-universities").html(
      `${formatNumber(regionData.education.universities["2024"])}`
    );
    $("#education-privateInstitutes").html(
      `${formatNumber(regionData.education.privateInstitutes["2023"])}`
    );
    $("#medical-hospitals").html(
      `${formatNumber(regionData.medical.hospitals["2024"])}`
    );
    $("#medical-pharmacies").html(
      `${formatNumber(regionData.medical.pharmacies["2024"])}`
    );
    $("#culturalFacilities-cultural").html(
      `${formatNumber(regionData.culturalFacilities.cultural["2022"])}`
    );
    $("#culturalFacilities-socialWelfare").html(
      `${formatNumber(regionData.culturalFacilities.socialWelfare["2021"])}`
    );
    $("#culturalFacilities-seniorLeisureWelfare").html(
      `${formatNumber(
        regionData.culturalFacilities.seniorLeisureWelfare["2023"]
      )}`
    );

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

    // 추천 임산물
    originalPriority = [...regionData.recommendedForestProducts.priority];
    originalRankedProducts = regionData.recommendedForestProducts.priority.map(
      (item) => forestProducts.find((prod) => prod.name === item.product)
    );

    if (originalRankedProducts.length > 0) {
      createForestProductBox(originalRankedProducts);
    }
  });
});

// 연도별 색상 설정 함수
function getColorForYear(year) {
  const colors = {
    2021: "#679951",
    2022: "#dfb162",
    2023: "#ed6d85",
  };
  return colors[year] || "#000000"; // 기본 색상
}

function formatNumber(value) {
  if (value === 0) {
    return "-"; // 값이 0이면 '-' 출력
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
  const filteredMentors = mentors.filter((mentor) =>
    mentorIds.includes(mentor.id)
  );

  let html = ""; // HTML 문자열 초기화
  filteredMentors.forEach((mentor) => {
    html += `
            <tr>
                <td class="nobor_l">${mentor.id}</td>
                <td>${mentor.name}</td>
                <td>${mentor.mainField}</td>
                <td>${mentor.subItems}</td>
                <td>${mentor.region}</td>
                <td class="t_newlaout">
                    <ul class="dot-list">
                        ${mentor.coreTech
                          .map((tech) => `<li>${tech}</li>`)
                          .join("")}
                    </ul>
                </td>
            </tr>
        `;
  });

  $("#mentorList tbody").html(html);
}

// 추천 임산물 순위 HTML을 생성하는 함수
function createForestProductBox(rankedProducts) {
  const topProduct = rankedProducts[0]; // 1위 제품

  // 가이드 및 매뉴얼 HTML 생성 함수
  function generateSlideHtml(data, type) {
    if (!data.image) return ""; // 데이터가 없으면 빈 문자열 반환
    return `
            <li>
                <div class="img-box">
                    <img src="${data.image}" alt="${
      type === "manual" ? "Manual" : "Guide"
    }" />
                </div>
                <div class="slide_txt">
                    <p>${topProduct.name} ${
      type === "manual" ? "재배지침" : "재배·관리매뉴얼"
    }</p>
                </div>
                <div class="pdf-link">
                    <a href="${
                      data.pdf
                    }" target="_blank" class="btn04_ss" title="새창 열림">
                        보기<img class="ml_5" src="https://www.kofpi.or.kr/resources/images/common/buttons_icon.png" alt="" />
                    </a>
                    <a href="javascript:fnCommPdfDownload(${
                      data.downloadSn
                    })" class="btn04_ss" title="새창 열림">
                       다운로드<img class="ml_5" src="https://www.kofpi.or.kr/resources/images/common/table_download_icon.png" alt="" />
                   </a>
                </div>
            </li>`;
  }

  // 슬라이드 HTML 생성
  const guideHtml = generateSlideHtml(topProduct.guide, "guide");
  const manualHtml = generateSlideHtml(topProduct.manual, "manual");
  const slideWrapHtml =
    guideHtml || manualHtml
      ? `
        <div class="slide_wrap">
            <ul class="slide_img">
                ${guideHtml}
                ${manualHtml}
            </ul>
        </div>`
      : "";

  // 2위 이후 제품 HTML 생성
  const otherRanksHtml = rankedProducts
    .slice(1) // 2위부터 시작
    .map((product, index) => {
      const rank =
        originalPriority.findIndex((item) => item.product === product.name) + 1;
      return `
           <a href="javascript:void(0);" data-rank="${rank}">
              <div class="thumbox">
                <img src="${product.imageUrl}" alt="${product.name}" />
                <p>${
                  product.imageSource ? `출처 : ${product.imageSource}` : ""
                }</p>
              </div>
              <b>${rank}위 <span>${product.name}</span></b>
            </a>`;
    })
    .join("");

  const rankBoxHtml = `<div class="rank-box">${otherRanksHtml}</div>`;

  // 추천 박스 HTML 생성
  const recommendBoxHtml = `
        <div class="recommend-box">
            <h5>
                임산물 ${
                  originalPriority.findIndex(
                    (item) => item.product === topProduct.name
                  ) + 1
                }위 <span>${topProduct.name}</span>
            </h5>
            <div class="recommend-inner">
                <div class="image-box">
                    <img src="${topProduct.imageUrl}" alt="${
    topProduct.name
  }" />
                    <p>${
                      topProduct.imageSource
                        ? `출처 : ${topProduct.imageSource}`
                        : ""
                    }</p>
                </div>
                <div class="contents-box">
                    ${rankBoxHtml}
                    <ul>
                    ${
                      Object.values(topProduct.content).length > 0
                        ? Object.values(topProduct.content)
                            .map(
                              (section, index) => `
                            <li class="${index === 0 ? "on" : ""}">
                                <a href="javascript:void(0);">
                                    <p class="top">${section.title}</p>
                                    <em></em>
                                </a>
                                <div>${section.details.join("<br />")}</div>
                            </li>
                        `
                            )
                            .join("")
                        : `<li class="on">
                            <a href="javascript:void(0);">
                                <p class="top">임산물 데이터</p>
                            </a>
                            <div class="nodata">
                                <p>데이터가 없습니다.</p>
                            </div>
                        </li>`
                    }
                    </ul>
                </div>
                ${slideWrapHtml}
            </div>
        </div>`;
  $("#forest-products").html(recommendBoxHtml); // 부모 요소에 추가

  setEventHandler();
}

// 클릭 이벤트 핸들러 설정
function setEventHandler() {
  try {
    $(".contents-box ul").on("click", "li", function () {
      if (!$(this).hasClass("on")) {
        $(".contents-box ul li").removeClass("on");
        $(this).addClass("on");
      }
    });
  } catch (e) {
    //
  }

  try {
    $(".slide_img").bxSlider({
      mode: "fade",
      speed: 500,
      pause: 3000,
      infiniteLoop: true,
      controls: true,
      pager: false,
    });
  } catch (e) {
    //
  }

  $("#forest-products .rank-box").on("click", "a", function () {
    const rank = $(this).data("rank");
    const selectedProduct = originalRankedProducts[rank - 1]; // 선택된 상품 가져오기

    // 배열 순서를 변경하여 1위 자리를 선택된 상품으로 업데이트
    const updatedRankedProducts = originalRankedProducts.filter(
      (_, idx) => idx !== rank - 1
    ); // 선택된 상품을 제외한 나머지
    updatedRankedProducts.unshift(selectedProduct); // 선택된 상품을 첫 번째로 이동

    // 1위 자리 업데이트
    createForestProductBox(updatedRankedProducts);
  });
}

/**
 * 파일 다운로드 이벤트
 * @param seq
 */
function fnCommPdfDownload(seq) {
  $("#fileSeq").val(seq);
  $("#downloadForm").attr(
    "action",
    "https://www.kofpi.or.kr/attach/pdfDownload.do"
  );
  $("#downloadForm").attr("target", "_self");
  $("#downloadForm").submit();
}
