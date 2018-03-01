import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const games = [
            { id: 11, name: 'Dark Souls 3', description: 'RPG' },
            { id: 12, name: 'Bright Souls 3', description: 'RPG' },
            { id: 13, name: 'Programming Simulator', description: 'Survival Horror'},
            { id: 14, name: 'Generic game', description: 'FPS'},
            { id: 15, name: 'Game', description: 'Game'},
            { id: 16, name: 'Racing game', description: 'Shooter'},
            { id: 17, name: 'Shooting game', description: 'Racing'},
            { id: 18, name: 'Logic Game', description: 'FPS'},
            { id: 19, name: 'Call of Duty', description: 'Simulator'},
            { id: 20, name: 'FullLife3', description: 'Indie' },
        ];

        const users = [
            { id: 1, name: 'LinuxUser',
                games: [
                    { id: 1, name: 'Dark Souls 3', description: 'RPG' },
                    { id: 15, name: 'Game', description: 'Game'},
                    { id: 16, name: 'Racing game', description: 'Shooter'},
                    { id: 17, name: 'Shooting game', description: 'Racing'},
                ],
                wishList: [
                    { id: 18, name: 'Logic Game', description: 'FPS'},
                    { id: 19, name: 'Call of Booty', description: 'Simulator'},
                    { id: 20, name: 'FullLife3', description: 'Indie' },
                ]
            },
            { id: 2, name: 'MacUser',
                games: [
                    { id: 18, name: 'Logic Game', description: 'FPS'},
                    { id: 19, name: 'Call of Booty', description: 'Simulator'},
                    { id: 20, name: 'FullLife3', description: 'Indie' },
                    { id: 11, name: 'Dark Holes 3', description: 'RPG' },
                    { id: 12, name: 'Bright Souls 3', description: 'RPG' },
                ],
                wishList: [
                    { id: 1, name: 'Dark Souls 3', description: 'RPG' },
                ]
            },
            { id: 3, name: 'WindowsUser',
                games: [
                    { id: 11, name: 'Dark Holes 3', description: 'RPG' },
                    { id: 12, name: 'Bright Souls 3', description: 'RPG' },
                    { id: 13, name: 'Programming Simulator', description: 'Survival Horror'},
                    { id: 14, name: 'Generic game', description: 'FPS'},
                    { id: 15, name: 'Game', description: 'Game'},
                ],
                wishList: [
                    { id: 16, name: 'Racing game', description: 'Shooter'},
                    { id: 17, name: 'Shooting game', description: 'Racing'},
                    { id: 18, name: 'Logic Game', description: 'FPS'},
                    { id: 19, name: 'Call of Booty', description: 'Simulator'},
                    { id: 20, name: 'FullLife3', description: 'Indie' },
                ]
            },

        ];
        return {games, users};
    }
}