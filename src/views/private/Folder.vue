<template>
  <div class="folder">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
        ><el-form
          :model="basicInformations"
          label-width="200px"
          label-position="top"
        >
          <el-form-item label="Prénom">
            <el-input v-model="basicInformations.firstname" />
          </el-form-item>
          <el-form-item label="Nom">
            <el-input v-model="basicInformations.lastname" />
          </el-form-item>
          <el-form-item label="Date de naissance">
            <el-date-picker
              v-model="basicInformations.bornDay"
              type="date"
              placeholder="Date de naissance"
            />
          </el-form-item>
          <el-form-item label="Genre">
            <el-radio v-model="basicInformations.gender" label="women"
              >Femme</el-radio
            >
            <el-radio v-model="basicInformations.gender" label="man"
              >Homme</el-radio
            >
          </el-form-item>
          <el-form-item label="Origine">
            <el-select
              v-model="medicalInformations.origin"
              filterable
              placeholder="Ajouter votre ville"
            >
              <el-option
                v-for="item in citiesOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Ancienneté du diabéte">
            <el-input v-model="basicInformations.seniorityOfDiabetes" />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
        ><el-form
          :model="medicalInformations"
          label-width="200px"
          label-position="top"
        >
          <el-form-item label="Poids (kg)">
            <el-input-number
              v-model="medicalInformations.weight"
              :precision="2"
              :step="0.1"
              :min="10"
            />
          </el-form-item>
          <el-form-item label="Taille (cm)">
            <el-input-number
              v-model="medicalInformations.height"
              :precision="2"
              :step="0.1"
              :min="10"
            />
          </el-form-item>
          <el-form-item label="Traitement en cours">
            <el-input v-model="medicalInformations.currentTreatment" />
          </el-form-item>
          <el-form-item label="Vaccinations">
            <el-select
              v-model="medicalInformations.vaccinations"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Ajouter un autre vaccin"
            >
              <el-option
                v-for="item in vaccinationsOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Allergies">
            <el-select
              v-model="medicalInformations.allergies"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Ajouter une autre allergie"
            >
              <el-option
                v-for="item in allergiesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="Antécedents médicaux, chirugicale, traumatiques, podologique"
          >
            <el-input v-model="medicalInformations.antecedents" />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-form :model="pattern" label-width="200px" label-position="top">
          <el-form-item label="Motif de consultation">
            <el-input
              v-model="pattern"
              type="textarea"
              show-word-limit
              maxlength="250"
              :autosize="{ minRows: 6, maxRows: 8 }"
            /> </el-form-item></el-form></el-col></el-row
    ><el-row justify="center"
      ><el-col :span="24">
        <el-divider />
        <el-button @click="onInit">Initialiser le dossier</el-button>
        <el-button type="primary" @click="onSubmit"
          >Enregister le dossier</el-button
        >
      </el-col></el-row
    >
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const basicInformations = reactive({
  firstname: "",
  lastname: "",
  bornDay: "",
  gender: "women",
  origin: "",
  seniorityOfDiabetes: "",
});

const medicalInformations = reactive({
  weight: 60,
  height: 170,
  currentTreatment: "",
  vaccinations: [],
  allergies: "",
  antecedents: "",
});

const pattern = ref("");
const vaccinationsOptions = ref([
  { label: "Tétanos", value: "tetanos" },
  { label: "Hépatite B", value: "hepatiteB" },
  { label: "Hépatite C", value: "hepatiteC" },
  { label: "Tuberculose", value: "tuberculose" },
]);
const allergiesOptions = ref([
  { label: "Loce", value: "loce" },
  { label: "Medicaments", value: "medicaments" },
  { label: "Latex", value: "latex" },
]);

const citiesOptions = ref([
  {
    id: 2550,
    name: "Ariana Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "12",
    type: null,
    latitude: "36.99227510",
    longitude: "10.12551640",
  },
  {
    id: 2566,
    name: "Ben Arous Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "13",
    type: null,
    latitude: "36.64356060",
    longitude: "10.21515780",
  },
  {
    id: 2551,
    name: "Bizerte Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "23",
    type: null,
    latitude: "37.16093970",
    longitude: "9.63413500",
  },
  {
    id: 2558,
    name: "Gabès Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "81",
    type: null,
    latitude: "33.94596480",
    longitude: "9.72326730",
  },
  {
    id: 2556,
    name: "Gafsa Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "71",
    type: null,
    latitude: "34.37885050",
    longitude: "8.66005860",
  },
  {
    id: 2552,
    name: "Jendouba Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "32",
    type: null,
    latitude: "36.71818620",
    longitude: "8.74811670",
  },
  {
    id: 2564,
    name: "Kairouan Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "41",
    type: null,
    latitude: "35.67116630",
    longitude: "10.10054690",
  },
  {
    id: 2570,
    name: "Kasserine Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "42",
    type: null,
    latitude: "35.08091480",
    longitude: "8.66005860",
  },
  {
    id: 2572,
    name: "Kassrine",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "31",
    type: null,
    latitude: "35.17227160",
    longitude: "8.83076260",
  },
  {
    id: 2562,
    name: "Kebili Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "73",
    type: null,
    latitude: "33.70715510",
    longitude: "8.97146230",
  },
  {
    id: 2561,
    name: "Kef Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "33",
    type: null,
    latitude: "36.12305120",
    longitude: "8.66005860",
  },
  {
    id: 2568,
    name: "Mahdia Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "53",
    type: null,
    latitude: "35.33525580",
    longitude: "10.89030990",
  },
  {
    id: 2555,
    name: "Manouba Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "14",
    type: null,
    latitude: "36.84465040",
    longitude: "9.85714160",
  },
  {
    id: 2560,
    name: "Medenine Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "82",
    type: null,
    latitude: "33.22805650",
    longitude: "10.89030990",
  },
  {
    id: 2553,
    name: "Monastir Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "52",
    type: null,
    latitude: "35.76425150",
    longitude: "10.81128850",
  },
  {
    id: 2557,
    name: "Sfax Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "61",
    type: null,
    latitude: "34.86065810",
    longitude: "10.34978950",
  },
  {
    id: 2567,
    name: "Sidi Bouzid Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "43",
    type: null,
    latitude: "35.03543860",
    longitude: "9.48393920",
  },
  {
    id: 2563,
    name: "Siliana Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "34",
    type: null,
    latitude: "36.08872080",
    longitude: "9.36453350",
  },
  {
    id: 2571,
    name: "Sousse Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "51",
    type: null,
    latitude: "35.90222670",
    longitude: "10.34978950",
  },
  {
    id: 2559,
    name: "Tataouine Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "83",
    type: null,
    latitude: "32.13441220",
    longitude: "10.08072980",
  },
  {
    id: 2569,
    name: "Tozeur Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "72",
    type: null,
    latitude: "33.97894910",
    longitude: "8.04651850",
  },
  {
    id: 2554,
    name: "Tunis Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "11",
    type: null,
    latitude: "36.83749460",
    longitude: "10.19273890",
  },
  {
    id: 2565,
    name: "Zaghouan Governorate",
    country_id: 224,
    country_code: "TN",
    country_name: "Tunisia",
    state_code: "22",
    type: null,
    latitude: "36.40911880",
    longitude: "10.14231720",
  },
]);

const onSubmit = () => {
  console.log("submit!", basicInformations);
};

const onInit = () => {
  console.log("onInit!", basicInformations);
};
</script>
