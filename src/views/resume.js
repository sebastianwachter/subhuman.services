const getAge = () => {
  const birthday = new Date('May 26, 1995');
  const age = new Date(Date.now() - birthday.getTime());
  return Math.abs(age.getUTCFullYear() - 1970);
};

export default `/*
                                              \`'
                                      -(IDg#@@@@@@#B$6MVv:\`    :-
                                  .vO@@@@@@@@@@@@@@@@@@@@@@#gk)=k88c;_
                               -cQ@##@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@#X,
                             :Z@@R}M@@@@@Ocr:_\` \`\`'-._<!vyd#@@@@@@@@@@@@m.
                           .b@8)^0@@@8}:                    \`rKB@@@@@@@@@@}
                         -8@#x"O@@@g~                           \`x$@@@@@@@@#:
                        M@#v\`y@@@q:                                ~E@@@@@@@@X\`
                      -Q@$__Q@@@*                                    :H@@@@@@@Q
                     ~@@Q\`!Q@@E                                        \0@@@@@@3
                    ,@@g-*@@@M\`                                         \`w@@@@@@0
                   \`B@@_<#@@M        '~^-                  \`*xuTi^-       g@@@@@@H
                   v@@P 6@@Z\`   -)3Q@@@@@#E}\`            rM@@@@@@@@@M-    \`#@@@@@Q
                   9@@QB@@B    v@@@@@@@@@@@@#<         *B@@@@@@@@@@@@@     }@@@@@@!
                   #@@@@@@*   \`#@@@@@@@@@@@@@q         @@@@@@@@@@@@@@@r    \`#@@@@@K
                   R@@@@@#     O@@@@@@@@@@@@Q_         v#@@@@@@@@@@@Q!\`     O@@@@@#.
                  *@@@@@@$     r@zZ#@@@@@#z>             -ldg@@#gV;\`        |@@@@@@Y
                  u@@@@@@y     !@)   .:-^_                                  v@@@@@@3
                  e@@@@@@M     c@L                                          m@@@@@@E
                  >@@@@@@B            *v~                  .y.              y@@@@@@B
                  :@@@@@@@\`           z@@V\`              \`V#@@K\`            0@@@@@@d
                   B@@@@@@3           \`D@@$v.           cQ@@@@@:           \`#@@@@@@w
                   m@@@@@@@"            L@@@#HVr:=)(|\\d@@@@@@Q"            X@@@@@@#<
                   #@@@@@@@#~            :$@@@@@@@@@@@@@@gV\`_             *@@@@@@@r
                   m$@@@@@@@#^             _zQ@$#@@@@@#E_                _#@@@@@#:
                     6@@@@@@@@h.                 ~v>,\`                  >8@@@@@@j
                     m@@#@@@@@@Q=                                     'W@@@@@@@#:
                     B@#-g@@@@@@@8T.                                _G#@@@@@@@5'
                    \`#@@  !0@@@@@@@@R~                           \`YW#@@@@@@@Br
                     \`=.    -k@@@@@@@@@bu^\`                  .<U$@@@@@@@@@E~
                              .xd@@@@@@@@@@#BQQ9dMkVT_"<iLqbB@@@@@@@@@@@@!
                                  ~5B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@O
                                     \`*VMQ@@@@@@@@@@@@@@@@@@@@@@@#@@@3x@M
                                           ,ruUd0gQ#QQ#@@BKIx=_\` :@@R y@R
                                                                 v@@# h@@\`
                                                                 a@@# I@@r
                                                                 \`yP: K@@0
                                                                      M@@Q
                                                                      )#@L
*/



const general = () => ({
  name: 'Sebastian Wachter',
  age: ${getAge()},
  spokenLanguages: [
    'English fluently',
    'German fluently',
  ],
  email: 'sebastian.wachter@online.de',
  city: 'Ditzingen',
  github: '@sebastianwachter',
});

const skills = () => ({
  programmingLanguages: [
    'JavaScript', 'C#', 'Java', 'Shell', 'Rust', 'Go', 'Bash', 'C',
  ],
  frontend: [
    'HTML 5', 'CSS 3', 'Vue.js', 'React', 'jQuery', 'Angular',
  ],
  bundler: [
    'Parcel', 'webpack',
  ],
  backend: [
    'node.js', 'Docker', 'Firebase', 'Go', 'Rust',
  ],
  databaseSystems: [
    'MongoDB', 'SQL (MariaDB, PostgreSQL)', 'Redis',
  ],
  versioning: 'Git',
  prototyping: [
    'AxureRP', 'Balsamiq',
  ],
  animation: 'Blender',
});

`;
