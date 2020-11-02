import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data:  object

  constructor() { 
    this.data = {
      "products": [
        {
          "color": "#F11516",
          "title": "Urgency",
          "text": "Destinado a internos e jovens médicos, este produto se destaca ao basear-se em metodologias ativas, contando com o único simulador de urgências do mercado. Percorra jornadas exclusivas, entrevistas, questões e aprenda as melhores condutas para a urgência e emergência, mitigando inseguranças."
        },
        {
          "color": "#1767E5",
          "title": "Student",
          "text": "Destinado a estudantes de medicina, ofereceremos aqui uma suíte completa para o aprendizado de todos os grandes pilares da medicina, desde as ciências básicas, até os protocolos de atendimento de urgência. Nossa metodologia promove o foco e uma visão global: você contará com podcasts, infográficos, flashcards e muito mais!"
        },
        {
          "color": "#6B41E9",
          "title": "Specialist",
          "text": "Seja o profissional mais qualificado do hospital! Aqui profissionais caminhando para a sua especialidade contarão com conteúdos exclusivos, contemplando múltiplas abordagens para ampliar a sua perspectiva sobre temas de alto nível técnico."
        },
        {
          "color": "#35DB93",
          "title": "Nursing",
          "text": "Visando enfermeiros que desejam destacar-se no mercado pela competência e atualização. Navegue por materiais de ponta que além do conhecimento técnico, oferecem conhecimento prático, científico, certificações e instrução para futuros gestores e empreendedores na área da saúde. Garanta seu conhecimento de excelência!"
        }
      ]
    }

   

    console.log(this.data)
  }

  ngOnInit(): void {

  }

}
