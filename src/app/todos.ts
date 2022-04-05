export interface IToDo {
  _id: string;
  name: string;
  about: string;
  time: string;
  icon: string;
}

export const notes: IToDo[] = [];

// export const todos: IToDo[] = [
//   {
//     _id: '61681c27f8f8743cab8b25a4',
//     name: 'Summers Rutledge',
//     about:
//       'Enim dolore labore aliqua duis esse eiusmod ullamco minim. Nulla aute anim tempor anim dolore id cupidatat culpa eiusmod. Adipisicing dolore proident non occaecat aliquip consectetur anim velit do. Ea exercitation eu anim deserunt. Et esse qui veniam cupidatat sunt aute. Dolor fugiat non dolore magna deserunt veniam eiusmod adipisicing nulla nostrud culpa tempor consequat.\r\n',
//     time: '2018-05-15T09:03:00 -03:00',
//     icon: 'fas fa-cocktail',
//   },
//   {
//     _id: '61681c27264d92d03587dd98',
//     name: 'Guerra Cunningham',
//     about:
//       'Duis Lorem cillum sit Lorem elit cillum exercitation dolor laboris qui reprehenderit laboris esse. Ut ipsum duis pariatur mollit reprehenderit pariatur tempor nulla culpa esse aliquip est ex. Ea aliqua excepteur dolor commodo est nostrud. Lorem eiusmod id mollit aliquip enim laborum. Labore velit esse eiusmod sit nisi ut. Deserunt non deserunt irure mollit fugiat veniam magna. Ut adipisicing magna consequat voluptate dolor ut officia est.\r\n',
//     time: '2020-04-12T09:31:49 -03:00',
//     icon: 'fas fa-bed',
//   },
//   {
//     _id: '61681c278c7c8c533c3b6cb5',
//     name: 'Bertha Blake',
//     about:
//       'Culpa ipsum pariatur amet laboris consequat et aliqua esse do culpa ex fugiat. Reprehenderit Lorem esse irure fugiat elit culpa ipsum non eu. Qui ea cillum adipisicing magna anim.\r\n',
//     time: '2014-12-10T11:21:10 -03:00',
//     icon: 'fas fa-dumbbell',
//   },
//   {
//     _id: '61681c27c3027a0d0bf4e44c',
//     name: 'Helga Ratliff',
//     about:
//       'Velit ad laborum ut consequat laboris sunt enim magna commodo laboris exercitation minim. Ea reprehenderit velit ipsum consectetur ipsum eiusmod dolore occaecat aliquip dolor mollit quis id fugiat. Excepteur anim magna adipisicing ipsum sint irure proident veniam. Adipisicing sunt voluptate et voluptate magna sit pariatur proident eu fugiat voluptate. Sint est anim pariatur ea officia anim nulla laboris occaecat ullamco do esse reprehenderit. Laboris irure proident velit deserunt sit duis occaecat aliqua officia cupidatat nostrud sit duis fugiat. Tempor officia in consectetur ex et qui excepteur Lorem mollit laboris.\r\n',
//     time: '2015-07-04T02:34:24 -03:00',
//     icon: 'fas fa-dumbbell',
//   },
//   {
//     _id: '61681c277f58e7be70f93c09',
//     name: 'Lina Navarro',
//     about:
//       'Ipsum anim proident minim ut magna mollit cupidatat nulla aute minim in consequat sint reprehenderit. Cillum quis incididunt et do deserunt reprehenderit in do est. Nisi deserunt sit aliquip aute mollit aliquip quis veniam sunt sunt officia. Ullamco magna ullamco sit cillum consectetur deserunt irure consequat. Deserunt deserunt nostrud officia anim cupidatat tempor excepteur sit labore adipisicing anim ea ea.\r\n',
//     time: '2017-02-14T04:32:58 -03:00',
//     icon: 'fas fa-dumbbell',
//   },
//   {
//     _id: '61681c2781366c26a41e9ed1',
//     name: 'Madeleine Cameron',
//     about:
//       'Ad duis voluptate magna id irure commodo voluptate mollit. Excepteur tempor culpa labore voluptate anim cillum aliqua ad esse irure anim. Esse sit sit minim eiusmod ad veniam cillum dolore aute esse velit id voluptate consequat. Excepteur elit cupidatat ipsum enim enim qui eu et consequat tempor. Qui ipsum nostrud do excepteur velit. Reprehenderit Lorem irure et tempor ut sint commodo magna non mollit.\r\n',
//     time: '2018-01-27T05:14:01 -03:00',
//     icon: 'fas fa-bath',
//   },
//   {
//     _id: '61681c27fb69b9c61bb9bbe6',
//     name: 'Mallory Lester',
//     about:
//       'Id magna exercitation fugiat labore. Pariatur exercitation laborum dolor qui Lorem amet anim proident. Quis ut cillum eu non eu. Quis occaecat nulla eu pariatur quis do qui commodo.\r\n',
//     time: '2015-12-26T06:40:00 -03:00',
//     icon: 'fas fa-bed',
//   },
//   {
//     _id: '61681c2760ec2abb810496fc',
//     name: 'Avila Bradley',
//     about:
//       'Proident commodo fugiat enim nisi mollit laborum ipsum laboris. Anim cillum nisi eu et elit in nulla. Ea mollit ea eu proident in nostrud sit exercitation. Exercitation duis enim ad enim.\r\n',
//     time: '2020-07-02T07:06:40 -03:00',
//     icon: 'fas fa-cocktail',
//   },
//   {
//     _id: '61681c27c99d54758a57bc32',
//     name: 'Nichole Clements',
//     about:
//       'Irure sunt minim reprehenderit voluptate fugiat aliquip laboris labore sint tempor pariatur proident aute. Duis esse velit tempor veniam veniam minim proident occaecat nisi velit eiusmod proident. Anim occaecat duis dolor irure consectetur est do. Lorem duis eu consequat commodo ut non esse culpa. Labore qui id do minim anim ad sint culpa voluptate. Consectetur ad commodo id occaecat do do dolore culpa adipisicing id veniam fugiat. Nisi quis proident cupidatat do in velit et sit consectetur enim magna reprehenderit est laboris.\r\n',
//     time: '2018-03-29T09:17:54 -03:00',
//     icon: 'fas fa-bath',
//   },
//   {
//     _id: '61681c27fe368efea6c97bf4',
//     name: 'Robbie Kramer',
//     about:
//       'Ad ea mollit sint dolore officia id deserunt dolor. Pariatur aute aute amet commodo aliquip. Magna ad enim ad mollit.\r\n',
//     time: '2015-12-08T02:13:38 -03:00',
//     icon: 'fas fa-bath',
//   },
// ];
