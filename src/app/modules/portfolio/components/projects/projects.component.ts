import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/uni9convert.png',
      alt: 'Units Converter',
      title: 'Uni9Convert',
      width: '130px',
      height: '60px',
      description: '<p>The best place to convert your numbers!</p>',
      links: [
        {
          name: 'Conheça o Conversor',
          href: 'https://uni9-convert.vercel.app/',
        }
      ]
    }
  ])
}
