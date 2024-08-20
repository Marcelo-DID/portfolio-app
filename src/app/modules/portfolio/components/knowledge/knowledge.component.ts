import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5icon.svg',
      alt: 'HTML5 Knowledge Icon'
    },
    {
      src: 'assets/icons/knowledge/jsicon.svg',
      alt: 'JavaScript Knowledge Icon'
    },
    {
      src: 'assets/icons/knowledge/css3icon.svg',
      alt: 'CSS3 Knowledge Icon'
    },
    {
      src: 'assets/icons/knowledge/angularicon.svg',
      alt: 'Angular Knowledge Icon'
    },
  ])
}
