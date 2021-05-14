const size = 5;

export const menuListMock = {code:0, message: "message", data: []};
for (let index = 0; index < size; index++) {
    menuListMock.data.push({
        child: [
            {
                child: [
                    {
                        child: [],
                        description: `${index+size}'s child Menu${index+size * 3} Description`,
                        menuId: `${index+size * 3}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 3} Name in Eng`,
                        nameKor: `Menu${index+size * 3}`,
                        menuType: "FOLDER",
                        url: `menu${index+size * 3}`
                    },
                    {
                        child: [],
                        description: `${index+size}'s child Menu${index+size * 4} Description`,
                        menuId: `${index+size * 4}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 4} Name in Eng`,
                        nameKor: `Menu${index+size * 4}`,
                        menuType: "FOLDER",
                        url: `menu${index+size * 4}`
                    }
                ],
                description: `${index}'s child Menu${index+size} Description`,
                menuId: `${index+size}`,
                menuOrder: `${index}`,
                nameEng: `Menu${index+size} Name in Eng`,
                nameKor: `Menu${index+size}`,
                menuType: "FOLDER",
                url: `menu${index+size}`
            },
            {
                child: [
                    {
                        child: [],
                        description: `${index+size}'s child Menu${index+size * 5} Description`,
                        menuId: `${index+size * 5}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 5} Name in Eng`,
                        nameKor: `Menu${index+size * 5}`,
                        menuType: "FOLDER",
                        url: `menu${index+size * 5}`
                    },
                    {
                        child: [
                            {
                                child: [],
                                description: `${index+size}'s child Menu${index+size * 7} Description`,
                                menuId: `${index+size * 7}`,
                                menuOrder: `${index}`,
                                nameEng: `Menu${index+size * 7} Name in Eng`,
                                nameKor: `Menu${index+size * 7}`,
                                menuType: "FOLDER",
                                url: `menu${index+size * 7}`
                            },
                            {
                                child: [],
                                description: `${index+size}'s child Menu${index+size * 8} Description`,
                                menuId: `${index+size * 8}`,
                                menuOrder: `${index}`,
                                nameEng: `Menu${index+size * 8} Name in Eng`,
                                nameKor: `Menu${index+size * 8}`,
                                menuType: "FOLDER",
                                url: `menu${index+size * 8}`
                            }
                        ],
                        description: `${index+size}'s child Menu${index+size * 6} Description`,
                        menuId: `${index+size * 6}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 6} Name in Eng`,
                        nameKor: `Menu${index+size * 6}`,
                        menuType: "FOLDER",
                        url: `menu${index+size * 6}`
                    }
                ],
                description: `${index}'s child Menu${index+size * 2} Description`,
                menuId: `${index+size * 2}`,
                menuOrder: `${index}`,
                nameEng: `Menu${index+size * 2} Name in Eng`,
                nameKor: `Menu${index+size * 2}`,
                menuType: "FOLDER",
                url: `menu${index+size * 2}`
            }
        ],
        description: `Menu${index} Description`,
        menuId: `${index}`,
        menuOrder: `${index}`,
        nameEng: `Menu${index} Name in Eng`,
        nameKor: `Menu${index}`,
        menuType: "FOLDER",
        url: `menu${index}`
    })
}