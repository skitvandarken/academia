import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare global {
  interface Window {
    UIkit?: any;
  }
}

@Component({
  selector: 'app-calendario',
  imports: [ RouterLink, CommonModule ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})

export class CalendarioComponent implements OnInit {
  trainings = [
    {
      title: 'Café DevOps',
      description: 'Descubra as práticas e ferramentas de Cloud, DevOps e Administração de Servidores Linux gratuitamente.',
      schedule: '10:00 - 14:00',
      days: 'Aos Sábados e Domingos',
      location: 'Presencial e Online',
      price: 'Grátis',
      priceNote: 'Compre um Café!',
      registerLink: 'https://forms.gle/PbDCHFyFF5H41fVk6',
      infoLink: '/formacoes'
    },
    // Add other trainings similarly
  ];

  ngOnInit(): void {
    // Load UIkit dynamically if not already loaded
    this.loadUIkit();
  }

  private loadUIkit(): void {
    if (typeof window['UIkit'] === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/uikit@3.16.15/dist/js/uikit.min.js';
      script.async = true;
      document.head.appendChild(script);
      
      const iconsScript = document.createElement('script');
      iconsScript.src = 'https://cdn.jsdelivr.net/npm/uikit@3.16.15/dist/js/uikit-icons.min.js';
      iconsScript.async = true;
      document.head.appendChild(iconsScript);
    }
  }

}