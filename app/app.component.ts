import { Component, VERSION, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  dataFinancial = [
  {
    "companyCustomerId": "2e10e667-7159-48bb-b35d-054261cf3226",
    "affiliateName": null,
    "order": 1,
    "proposalId": null,
    "companyCustomer": {
      "name": "Company Name",
      "id": "2e10e667-7159-48bb-b35d-054261cf3226"
    },
    "proposal": null,
    "years": [
      {
        "financialDataId": "5e7a749e-fb3e-43fe-8c26-e526ec66e9ef",
        "year": 2021,
        "quantityMonths": 12,
        "result": {
          "financialDataYearId": "a944c231-9d49-4f39-ae1a-f36487813c8f",
          "currentAssets": 10,
          "customers": 10,
          "immobilized": 10,
          "currentLiabilities": 10,
          "providers": 10,
          "currentLiquidityPercent": 10,
          "stocks": 101,
          "dryLiquidityPercent": 1,
          "active": 10,
          "passive": 10,
          "debts": 10,
          "thirdCP": 10,
          "ownCP": 10,
          "thirdLP": 10,
          "ownLP": 10,
          "cashier": 10,
          "pl": 10,
          "generalLiquidityPercent": 10,
          "netRevenue": 10,
          "costs": 10,
          "depreciation": 10,
          "depreciationPercent": 10,
          "financialIncome": 10,
          "financialExpense": 10,
          "financialExpensePercent": 10,
          "taxes": 10,
          "netProfit": 10,
          "netMarginPercent": 10,
          "roe": 10,
          "ebitda": 10,
          "netDebtPl": 10,
          "monthlyRevenue": 10,
          "compMonthly": 10,
          "compMonthlyPercent": 10,
          "id": "15d3548c-4f90-4c03-a4cb-5d922ea9264f"
        },
        "details": [
          {
            "order": 1,
            "name": "Deduções",
            "value": 25,
            "isResult": false,
            "tab": {
              "name": "Demonstrativo de Resultados",
              "id": "021a2b0f-0344-4baf-a9e7-96524cac45c1"
            },
            "section": {
              "name": "Receita Operac. Bruta",
              "id": "77f56880-65c1-418d-b332-ac1901a59224"
            },
            "id": "2e0f38aa-c621-45e5-90ea-03a9ffe18ee7"
          },
          {
            "order": 3,
            "name": "Clientes",
            "value": 250,
            "isResult": false,
            "tab": {
              "name": "Balanço Integral",
              "id": "aacc6c82-fb1f-47fb-b1ad-70086b6a7939"
            },
            "section": {
              "name": "Ativo Circulante",
              "id": "39653361-7fe0-4af9-9846-f26bf35bb993"
            },
            "id": "781e7907-53d9-4d4c-9d38-176857b32330"
          },
          {
            "order": 1,
            "name": "Fornecedores",
            "value": 15,
            "isResult": false,
            "tab": {
              "name": "Balanço Integral",
              "id": "aacc6c82-fb1f-47fb-b1ad-70086b6a7939"
            },
            "section": {
              "name": "Passivo Circulante",
              "id": "e864a9b5-dd57-4b84-a050-36f90af7695d"
            },
            "id": "9e32f07f-a437-49cd-b976-19b314bc05cf"
          },
          {
            "order": 2,
            "name": "Bancos Curto Prazo",
            "value": 30,
            "isResult": false,
            "tab": {
              "name": "Balanço Integral",
              "id": "aacc6c82-fb1f-47fb-b1ad-70086b6a7939"
            },
            "section": {
              "name": "Passivo Circulante",
              "id": "e864a9b5-dd57-4b84-a050-36f90af7695d"
            },
            "id": "74c845c0-6008-4023-ae8a-7957376a0ba7"
          },
          {
            "order": 1,
            "name": "Caixa/Bancos",
            "value": 125,
            "isResult": false,
            "tab": {
              "name": "Balanço Integral",
              "id": "aacc6c82-fb1f-47fb-b1ad-70086b6a7939"
            },
            "section": {
              "name": "Ativo Circulante",
              "id": "39653361-7fe0-4af9-9846-f26bf35bb993"
            },
            "id": "1815797d-3ee0-4e56-a421-b9497883144c"
          },
          {
            "order": 2,
            "name": "Aplicações Financeiras",
            "value": 200,
            "isResult": false,
            "tab": {
              "name": "Balanço Integral",
              "id": "aacc6c82-fb1f-47fb-b1ad-70086b6a7939"
            },
            "section": {
              "name": "Ativo Circulante",
              "id": "39653361-7fe0-4af9-9846-f26bf35bb993"
            },
            "id": "3e14fed5-f75c-48e1-9a90-fdc98d072228"
          }
        ],
        "id": "a944c231-9d49-4f39-ae1a-f36487813c8f"
      }
    ]
  }
];

  tabs: any[] = [
    { name: "Balanço Integral", isSaved: true, index: 0 },
    { name: "Demonstrativo de Resultados", isSaved: true, index: 1 }
  ];

  currentTab: any = this.tabs[0];
  nextTab: any = null;
  enableTabs: boolean;
  isViewMode: boolean;

  empresas: any;
  anos: any;
  resultados: any;
  detalhes: any;
  demonstrativo: any;
  periodoAno: any;
  qtdMeses: any;

  //balanço
  ativoCirculante: any;
  totalativoCirculante = 0;
  ativoPermanente: any;
  realizavelLongoPrazo: any;
  patrimonioLiquido;
  passivoCirculante: any;
  exigivelLongoPrazo: any;

  //demosntrativo
  receitaOpBruta: any;
  lucroBruto: any;
  resOpLiquido: any;
  receitaOpLiquida: any;
  resOpeAntesResFin: any;

  empresaSelecionada = 0;

  //resultados
  resultadosEsq: any;
  resultadosDir: any;
  resultadosEsqValor: any;
  resultadosDirValor: any;
  form: FormGroup;
  ativo_circulante: FormGroup;

  showResult = false;

  //console.log()

  constructor( private readonly fb: FormBuilder,) {}

  ngOnInit() {

  
    console.log(this.dataFinancial, 'completo')

    this.empresas = this.dataFinancial
    console.log(this.empresas, 'empresa')

    this.anos = this.empresas[this.empresaSelecionada].years;
    console.log(this.anos, 'anos')

    this.resultados = this.anos.map(result => result.result);
    console.log(this.resultados, 'resultado')

    // this.resultadosEsq = this.resultados.map(i =>
    //   i.filter(x => x.column === 1)
    // );
    // this.resultadosEsqValor = this.resultadosEsq.map(x => x.map(m => m.name));
    // this.resultadosEsqValor = this.resultadosEsqValor[0];

    // this.resultadosDir = this.resultados.map(i =>
    //   i.filter(x => x.column === 2)
    // );
    // this.resultadosDirValor = this.resultadosDir.map(x => x.map(m => m.name));
    // this.resultadosDirValor = this.resultadosDirValor[0];

    //inicio detalhes
    this.detalhes = this.anos.map(detalhes => detalhes.details);
    console.log(this.detalhes, 'detalhes')

    this.ativoCirculante = this.detalhes.map(i =>
       i.filter(x => x.section.id === '39653361-7fe0-4af9-9846-f26bf35bb993'));
    console.log(this.ativoCirculante, 'ativoCirculante')


    this.ativoPermanente = this.detalhes.map(i =>
       i.filter(x => x.section.id === '44BD6A40-BBA8-4D97-A74D-674ABB1BB0C8'));

    this.realizavelLongoPrazo = this.detalhes.map(i =>
       i.filter(x => x.section.id === 'D0869BEB-917C-4E40-BDCC-36CA97B2E790'));

    this.patrimonioLiquido = this.detalhes.map(i =>
       i.filter(x => x.section.id === 'AFB72B77-C630-4802-978E-233FB22989EA'));

    this.passivoCirculante = this.detalhes.map(i =>
       i.filter(x => x.section.id === 'E864A9B5-DD57-4B84-A050-36F90AF7695D'));

    this.exigivelLongoPrazo = this.detalhes.map(i =>
       i.filter(x => x.section.id === '68920CA1-9E5C-467E-B02A-2C839CB1A0AE'));

    //inicio demosntrativo

    this.receitaOpBruta = this.detalhes.map(i =>
       i.filter(x => x.section.id === '77F56880-65C1-418D-B332-AC1901A59224 '));

    this.lucroBruto = this.detalhes.map(i =>
       i.filter(x => x.section.id === 'EBE6CAC0-D6E6-40D3-B051-8FB213B88AEC'));

    this.resOpLiquido = this.detalhes.map(i =>
       i.filter(x => x.section.id === '4DF21E58-C69D-46BC-8F34-8CCDF04B3E3E'));

    this.receitaOpLiquida = this.detalhes.map(i =>
       i.filter(x => x.section.id === 'CA8E9629-FF89-4041-8F6E-E806EBB7C91F'));

    this.resOpeAntesResFin = this.detalhes.map(i =>
       i.filter(x => x.section.id === '8968478E-DA87-4951-A766-53DC9EC7A1BC'));


    this.ativo_circulante = this.fb.group({
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: ""
    });
    

  }

  calc() {
    let total = 0
    for (var key in this.ativo_circulante.value) {
        total += +this.ativo_circulante.value[key];
    };
    this.totalativoCirculante = total;
  }
}
