import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Support Analyst L2",
        p: "Stefanini IT Solutions | Mar 2023 - Present"
      },
      text: "<p> Working as an Outsourcer at Scania Latin America LTDA. Monitoring of data links, technical support for users of Desktops, Notebooks, Printers, Data Scanners, configuration of cellphone devices, configuration of iPhones, installation of software approved by the corporation, opening tickets through a portal available on the INTRANET, creation of procedures , Image download of the Windows 7, 8 and 10 Operating System, Configuration and management of Exchange Server through Microsoft Outlook. Development of applications and automations in Python, Apps using the Power Apps tool.</p>"
    }
  ])
}
