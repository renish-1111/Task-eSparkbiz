let url = window.location.search;
  const params = new URLSearchParams(url);
  let page = params.get("page") || 1;

  let offset = params.get("offset") || 100;
  let search = params.get("search") || "";
  let sorting = params.get("sorting") || "id,asc";

  window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentOffset = urlParams.get("offset");
    const currentSearch = urlParams.get("search");
    const currentPage = urlParams.get("page");

    if (currentOffset) {
      document.getElementById("offset").value = currentOffset;
    }
    if (currentSearch) {
      document.getElementById("search").value = currentSearch;
    }

    if (currentPage) {
      if (parseInt(currentPage) > "<%= total %>") {
        window.location.href = `/?page=<%= total %>&offset=${offset}&sorting=${sorting}&search=${search}`;
      }
      if(currentPage < 1 && "<%= total %>" != 0){
        window.location.href = `/?page=1&offset=${offset}&sorting=${sorting}&search=${search}`;
      }
      if(currentPage < 7 && "<%= total %>" != 0){
        document.getElementById("dotstart").classList.add("hidden");
      }
      if (currentPage > "<%= total %>" - 6) {
        document.getElementById("dotend").classList.add("hidden");
      }
      if ("<%= total%>" == 0){
        document.getElementById("bar").classList.add("hidden");
        document.getElementById("error").classList.remove("hidden");
      }
    }

  });

  document.getElementById("idasc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=id,asc&search=${search}`;
  });
  document.getElementById("iddesc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=id,desc&search=${search}`;
  });
  document.getElementById("nameasc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=name,asc&search=${search}`;
  });
  document.getElementById("namedesc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=name,desc&search=${search}`;
  });
  document.getElementById("cityasc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=city,asc&search=${search}`;
  });
  document.getElementById("citydesc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=city,desc&search=${search}`;
  });
  document.getElementById("dobasc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=dob,asc&search=${search}`;
  });
  document.getElementById("dobdesc").addEventListener("click", () => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=dob,desc&search=${search}`;
  });
  document.getElementById("search").addEventListener("change", (e) => {
    window.location.href = `/?page=${page}&offset=${offset}&sorting=${sorting}&search=${e.target.value}`;
  });
  let dropdown = document.getElementById("offset");
  dropdown.addEventListener("change", function (e) {
    document.getElementById("offset").value = e.target.value;
    window.location.href = `/?page=${page}&offset=${e.target.value}&sorting=${sorting}&search=${search}`;
  });

  // let pages = document.querySelectorAll(".pageblock");
  for (let i = 1; i <= "<%= total %>"; i++) {
    let link = document.getElementById(`p${i}`);
    if (link) {
      link.href = `/?page=${i}&offset=${offset}&sorting=${sorting}&search=${search}`;
    }
  }

  document.getElementById(`block${page}`).classList.add("active");

  document.getElementById("next").addEventListener("click", () => {
    url = window.location.href;
    console.log(url);

    page = parseInt(url.split("page=")[1]);
    console.log(page);

    pageElement = document.getElementById(`p${page + 1}`);
    if (pageElement) {
      pageElement.click();
    } else {
      console.log("error");
    }
  });
  document.getElementById("previous").addEventListener("click", () => {
    url = window.location.href;
    console.log(url);

    page = parseInt(url.split("page=")[1]);
    console.log(page);

    pageElement = document.getElementById(`p${page - 1}`);
    if (pageElement) {
      pageElement.click();
    } else {
      console.log("error");
    }
  });