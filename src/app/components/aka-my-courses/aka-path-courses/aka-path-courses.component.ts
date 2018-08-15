import { Component } from "@angular/core";

@Component({
  selector: 'aka-path-courses',
  templateUrl: './aka-path-courses.component.html',
  styleUrls: ['./aka-path-courses.component.scss']
})
export class AkaPathComponent {
  public courses: any[] = [
    {
      id: '222',
      icon: '',
      image: '',
      title: 'Introducción al Diseño',
      slug: 'introduccion-al-diseno',
      brief: 'Amet minim nisi sit ea. Est consectetur commodo cupidatat enim aute veniam ipsum proident enim. Sunt incididunt laborum sint duis.',
      description: `Duis enim consectetur commodo excepteur. Laborum amet anim do esse anim nisi incididunt amet laborum ea id aliqua excepteur dolore. Laborum tempor eiusmod do nisi incididunt in minim Lorem ullamco. Lorem commodo aute eu nisi commodo duis do laborum dolor ullamco. Laborum adipisicing adipisicing irure laboris tempor incididunt.\nSunt irure in fugiat culpa sunt est laboris. Et tempor commodo non cupidatat eu cillum consequat commodo magna exercitation nisi ad. Elit id duis culpa irure dolore ipsum magna. Commodo labore cillum cupidatat elit in ea veniam commodo. Labore ad ut excepteur dolor eiusmod est irure elit sunt aliqua quis. Sint culpa ut reprehenderit elit.\nVoluptate do consequat occaecat aute mollit fugiat aliqua. Minim aute exercitation ex qui est in incididunt magna adipisicing amet consectetur velit mollit minim. Eiusmod adipisicing ipsum adipisicing commodo sunt nulla excepteur ex. Irure exercitation eiusmod ad elit non cupidatat laboris pariatur ipsum ullamco ex eu consequat aute. Enim mollit nostrud occaecat amet.\nDuis fugiat cupidatat ullamco consequat voluptate sit duis duis reprehenderit nostrud deserunt sit elit adipisicing. Enim officia ex occaecat dolore eu ex voluptate sint aliquip. Ut exercitation do incididunt exercitation do et nostrud do laboris magna.`,
      attributes: {
        difficult: 2,
        rating: 4,
        free: false
      },
      teachers: [
        {
          id: '222',
          name: 'Martin Sánchez',
          profileUrl: '',
          picture: '/assets/images/profile-mock.jpg'
        }
      ],
      // Estos atributos dependen exclusivamente
      // del usuario logueado
      marked: true,
      coverage: {
        started: true,
        approved: false,
        progress: 45
      }
    },
    {
      id: '444',
      icon: '',
      image: '',
      title: 'Introducción a Base de Datos',
      slug: 'introduccion-a-base-de-datos',
      brief: 'Amet minim nisi sit ea. Est consectetur commodo cupidatat enim aute veniam ipsum proident enim. Sunt incididunt laborum sint duis.',
      description: `Duis enim consectetur commodo excepteur. Laborum amet anim do esse anim nisi incididunt amet laborum ea id aliqua excepteur dolore. Laborum tempor eiusmod do nisi incididunt in minim Lorem ullamco. Lorem commodo aute eu nisi commodo duis do laborum dolor ullamco. Laborum adipisicing adipisicing irure laboris tempor incididunt.\nSunt irure in fugiat culpa sunt est laboris. Et tempor commodo non cupidatat eu cillum consequat commodo magna exercitation nisi ad. Elit id duis culpa irure dolore ipsum magna. Commodo labore cillum cupidatat elit in ea veniam commodo. Labore ad ut excepteur dolor eiusmod est irure elit sunt aliqua quis. Sint culpa ut reprehenderit elit.\nVoluptate do consequat occaecat aute mollit fugiat aliqua. Minim aute exercitation ex qui est in incididunt magna adipisicing amet consectetur velit mollit minim. Eiusmod adipisicing ipsum adipisicing commodo sunt nulla excepteur ex. Irure exercitation eiusmod ad elit non cupidatat laboris pariatur ipsum ullamco ex eu consequat aute. Enim mollit nostrud occaecat amet.\nDuis fugiat cupidatat ullamco consequat voluptate sit duis duis reprehenderit nostrud deserunt sit elit adipisicing. Enim officia ex occaecat dolore eu ex voluptate sint aliquip. Ut exercitation do incididunt exercitation do et nostrud do laboris magna.`,
      attributes: {
        difficult: 2,
        rating: 4,
        free: false
      },
      teachers: [
        {
          id: '222',
          name: 'Martin Sánchez',
          profileUrl: '',
          picture: '/assets/images/profile-mock.jpg'
        }
      ],
      // Estos atributos dependen exclusivamente
      // del usuario logueado
      marked: true,
      coverage: {
        started: false,
        approved: false,
        progress: 0
      }
    }
  ];
}