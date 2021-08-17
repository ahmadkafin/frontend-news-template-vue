<template>
  <Suspense>
    <template #default>
      <NewArtikelContent />
    </template>
    <template #fallback>
      loading....
    </template>
  </Suspense>
</template>

<script>
import NewArtikelContent from "@/components/include/content/Home/content/_NewArtikelContent";
export default {
  name: "NewArtikel",
  components: {
    NewArtikelContent,
  },
};
</script>

<style>
a.nav-link {
  cursor: pointer;
}
.rect {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.text-sm {
  font-size: 0.7rem;
  font-weight: 600;
}

.artikel-terbaru {
  max-height: 577px;
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.artikel-terbaru::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.artikel-terbaru {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

a.social-link {
  text-decoration: none;
}

a.social-link:hover .social {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
}

.social {
  width: 100%;
  border: 1px solid transparent;
  text-align: center;
  margin-bottom: 15px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.facebook {
  color: white;
  background: #1f8cb4;
}

.instagram {
  color: white;
  background: #e73c7e;
}

.twitter {
  color: white;
  background: #3cbfe7;
}

.rect img {
  object-fit: contain;
}

.headertwo-title {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
  height: 46px;
  width: auto;
  display: inline-block;
  padding: 0 40px 0 40px;
  margin: auto;
  position: relative;
  color: #fff;
  line-height: 45px;
  font-size: 18px;
  text-align: center;
}

.btn-gradient {
  background: #e73c7e;
  background-size: 400% 400%;
  color: white;
}
.btn-gradient:hover {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
  border: 0px solid transparent;
  color: white;
}

.position-right {
  position: absolute;
  right: 75px;
}

.active-nav {
  color: #e73c7e !important;
}

.nav-second-header {
  color: black;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
}

.img-frame {
  overflow: hidden;
  height: 130px;
}

.img-frame img {
  object-fit: cover;
  width: 100%;
}

.navbar-second {
  display: block;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.second-nav ul {
  margin-left: auto;
  order: 2;
}

span.second-body-text p {
  margin-bottom: 0em !important;
  font-size: 0.9rem;
  text-align: justify;
}

.nav-second-header:hover {
  color: #e73c7e;
  transition: color 0.3s ease-out;
}

span.text-cap {
  text-transform: capitalize;
}

.card-bottom {
  max-height: 150px;
}

@media only screen and (max-width: 720px) {
  .position-right {
    position: relative;
    overflow-x: scroll;
    right: 0px;
  }
  .headertwo-title {
    width: 100%;
  }
  .btn-header-two {
    width: 100%;
  }
  .navbar-toggler-second {
    width: 100%;
  }
  .navbar-second {
    justify-content: center;
  }
  .nav-second-header {
    color: black;
    font-weight: 500;
    margin-left: 20px;
  }

  .second-nav {
    position: relative;
    left: 0em;
  }

  .card-bottom {
    max-height: 280px;
    padding-bottom: 10px;
  }
}
</style>
