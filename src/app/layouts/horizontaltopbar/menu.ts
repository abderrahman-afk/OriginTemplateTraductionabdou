import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            // {
            //     id: 4,
            //     label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
            //     link: '/dashboards/saas',
            //     parentId: 2
            // },
            // {
            //     id: 5,
            //     label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
            //     link: '/dashboards/crypto',
            //     parentId: 2
            // },
            // {
            //     id: 6,
            //     label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
            //     link: '/dashboards/blog',
            //     parentId: 2
            // },
        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 9,
        label: 'Calendrier des congés',
        icon: 'bx-calendar',
        link: '/calendar-conge/calendar-conge',
    },
    {
        id: 10,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',

    },
    // {
    //     id: 11,
    //     label: 'MENUITEMS.FILEMANAGER.TEXT',
    //     icon: 'bx-file',
    //     link: '/filemanager',
    //     badge: {
    //         variant: 'success',
    //         text: 'MENUITEMS.FILEMANAGER.BADGE',
    //     },
    // },
    {
        id: 12,
        label: 'Employe',
        icon: 'bx-store',
        subItems: [
            {
                id: 13,
                label: 'Informations personnel',
                link: '/employe/infopers',
                parentId: 12
            },
            {
                id: 14,
                label: 'Informations professionel',
                link: '/employe/infoprof',
                parentId: 12
            },
            {
                id: 15,
                label: 'Informations sociale',
                link: '/employe/infosoc',
                parentId: 12
            },
          


        ]
    },
    {
        id: 12,
        label: 'Fiche Evaluation',
        icon: 'bx-store',
        link: '/EspaceCollaborateur/evalcomp',


    },
    // {
    //     id: 13,
    //     label: 'Consultation Collaborateur',
    //     icon: 'bx-store',
    //     subItems: [
    //         {
    //             id: 13,
    //             label: 'Informations personnel',
    //             link: '/EspaceCollaborateur/infopers',
    //             parentId: 13
    //         },
    //         {
    //             id: 14,
    //             label: 'Informations professionel',
    //             link: '/EspaceCollaborateur/infoprof',
    //             parentId: 13
    //         },
    //         {
    //             id: 15,
    //             label: 'Informations sociale',
    //             link: '/EspaceCollaborateur/infosoc',
    //             parentId: 13
    //         },
    //         {
    //             id: 16,
    //             label: 'Evaluation des Compétances',
    //             link: '/EspaceCollaborateur/evalcomp',
    //             parentId: 13
    //         },

    //     ]
    // },
    {
        id: 21,
        label: 'MENUITEMS.DEMANDE.TEXT',
        icon: 'bx bx-highlight',
        subItems: [
            {
                id: 22,
                label: 'PRETAVANCE',
                link: '/demande/PretAvance',
                parentId: 21
            },
            {
                id: 23,
                label: 'AUTORISATION',
                link: '/demande/Autorisation',
                parentId: 21
            },
            {
                id: 24,
                label: 'CONGE',
                link: '/demande/Conge',
                parentId: 21
            },
            {
                id: 25,
                label: 'SITUATION',
                link: '/demande/Situation',
                parentId: 21
            },
            {
                id: 26,
                label: 'FORMATION',
                link: '/demande/Formation',
                parentId: 21
            },
            {
                id: 27,
                label: 'DOCUMENT',
                link: '/demande/Document',
                parentId: 21
            },

        ]
    },
    // {
    //     id: 29,
    //     label: 'MENUITEMS.EMAIL.TEXT',
    //     icon: 'bx-envelope',
    //     subItems: [
    //         {
    //             id: 30,
    //             label: 'MENUITEMS.EMAIL.LIST.INBOX',
    //             link: '/email/inbox',
    //             parentId: 29
    //         },
    //         {
    //             id: 31,
    //             label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
    //             link: '/email/read/1',
    //             parentId: 29
    //         },
    //         {
    //             id: 32,
    //             label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
    //             badge: {
    //                 variant: 'success',
    //                 text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
    //             },
    //             parentId: 29,
    //             subItems: [
    //                 {
    //                     id:33 ,
    //                     label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
    //                     link: '/email/basic',
    //                     parentId:32
    //                 },
    //                 {
    //                     id:34 ,
    //                     label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
    //                     link: '/email/alert',
    //                     parentId:32
    //                 },
    //                 {
    //                     id:35 ,
    //                     label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
    //                     link: '/email/billing',
    //                     parentId:32
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 36,
        label: 'Consultation congé',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 37,
                label: 'Solde congé',
                link: '/conge/list',
                parentId: 36
            },
            {
                id: 38,
                label: 'Consultation congé ',
                link: '/conge/solde',
                parentId: 36
            },
        ],

    },
    {
        id: 39,
        label: 'Paie',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 40,
                label: 'Etat aprés paie',

                parentId: 126,
                subItems: [
                    {
                        id: 1128,
                        label: 'Edition bulletin de paie',
                        parentId: 40,
                        link : '/paie/bulletin-paie'
                    }
                 
                ]
            },
          

        ]
    },



    // {
    //     id: 44,
    //     label: 'MENUITEMS.TASKS.TEXT',
    //     icon: 'bx-task',
    //     subItems: [
    //         {
    //             id: 45,
    //             label: 'MENUITEMS.TASKS.LIST.TASKLIST',
    //             link: '/tasks/list',
    //             parentId: 44
    //         },
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.TASKS.LIST.KANBAN',
    //             link: '/tasks/kanban',
    //             parentId: 44
    //         },
    //         {
    //             id: 47,
    //             label: 'MENUITEMS.TASKS.LIST.CREATETASK',
    //             link: '/tasks/create',
    //             parentId: 44
    //         }
    //     ]
    // },
    // {
    //     id: 48,
    //     label: 'MENUITEMS.CONTACTS.TEXT',
    //     icon: 'bxs-user-detail',
    //     subItems: [
    //         {
    //             id: 49,
    //             label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
    //             link: '/contacts/grid',
    //             parentId: 48
    //         },
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
    //             link: '/contacts/list',
    //             parentId: 48
    //         },
    //         {
    //             id: 51,
    //             label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
    //             link: '/contacts/profile',
    //             parentId: 48
    //         }
    //     ]
    // },
    {
        id: 52,
        label: 'Evenement',
        icon: 'bx-file',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
        },
        subItems: [

            {
                id: 56,
                label: 'Liste des évenements',
                link: '/blog/getbyD',
                parentId: 52
            },
            {
                id: 54,
                label: 'Historique des évenements',
                link: '/blog/grid',
                parentId: 52
            },

            // {
            //     id: 55,
            //     label: 'MENUITEMS.BLOG.LIST.DETAIL',
            //     link: '/blog/detail',
            //     parentId: 52
            // },

        ]
    },
    // {
    //     id: 56,
    //     label: 'MENUITEMS.PAGES.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 57,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'bx-user-circle',
    //     badge: {
    //         variant: 'success',
    //         text: 'MENUITEMS.AUTHENTICATION.BADGE',
    //     },
    //     subItems: [
    //         {
    //             id: 58,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
    //             link: '/account/login',
    //             parentId: 57
    //         },
    //         {
    //             id: 59,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
    //             link: '/account/login-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 60,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
    //             link: '/account/signup',
    //             parentId: 57
    //         },
    //         {
    //             id: 61,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
    //             link: '/account/signup-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 62,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
    //             link: '/account/reset-password',
    //             parentId: 57
    //         },
    //         {
    //             id: 63,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
    //             link: '/account/recoverpwd-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 64,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
    //             link: '/pages/lock-screen-1',
    //             parentId: 57
    //         },
    //         {
    //             id: 65,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
    //             link: '/pages/lock-screen-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 66,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
    //             link: '/pages/confirm-mail',
    //             parentId: 57
    //         },
    //         {
    //             id: 67,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
    //             link: '/pages/confirm-mail-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 68,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
    //             link: '/pages/email-verification',
    //             parentId: 57
    //         },
    //         {
    //             id: 69,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
    //             link: '/pages/email-verification-2',
    //             parentId: 57
    //         },
    //         {
    //             id: 70,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
    //             link: '/pages/two-step-verification',
    //             parentId: 57
    //         },
    //         {
    //             id: 71,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
    //             link: '/pages/two-step-verification-2',
    //             parentId: 57
    //         }
    //     ]
    // },
    // {
    //     id: 72,
    //     label: 'MENUITEMS.UTILITY.TEXT',
    //     icon: 'bx-file',
    //     subItems: [
    //         {
    //             id: 73,
    //             label: 'MENUITEMS.UTILITY.LIST.STARTER',
    //             link: '/pages/starter',
    //             parentId: 72
    //         },
    //         {
    //             id: 74,
    //             label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
    //             link: '/pages/maintenance',
    //             parentId: 72
    //         },
    //         {
    //             id: 74,
    //             label: 'Coming Soon',
    //             link: '/pages/coming-soon',
    //             parentId: 72
    //         },
    //         {
    //             id: 75,
    //             label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
    //             link: '/pages/timeline',
    //             parentId: 72
    //         },
    //         {
    //             id: 76,
    //             label: 'MENUITEMS.UTILITY.LIST.FAQS',
    //             link: '/pages/faqs',
    //             parentId: 72
    //         },
    //         {
    //             id: 77,
    //             label: 'MENUITEMS.UTILITY.LIST.PRICING',
    //             link: '/pages/pricing',
    //             parentId: 72
    //         },
    //         {
    //             id: 78,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR404',
    //             link: '/pages/404',
    //             parentId: 72
    //         },
    //         {
    //             id: 79,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR500',
    //             link: '/pages/500',
    //             parentId: 72
    //         },
    //     ]
    // },
    // {
    //     id: 80,
    //     label: 'MENUITEMS.COMPONENTS.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 81,
    //     label: 'MENUITEMS.UIELEMENTS.TEXT',
    //     icon: 'bx-tone',
    //     subItems: [
    //         {
    //             id: 82,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    //             link: '/ui/alerts',
    //             parentId: 81
    //         },
    //         {
    //             id: 83,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    //             link: '/ui/buttons',
    //             parentId: 81
    //         },
    //         {
    //             id: 84,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    //             link: '/ui/cards',
    //             parentId: 81
    //         },
    //         {
    //             id: 85,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    //             link: '/ui/carousel',
    //             parentId: 81
    //         },
    //         {
    //             id: 86,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    //             link: '/ui/dropdowns',
    //             parentId: 81
    //         },
    //         {
    //             id: 87,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
    //             link: '/ui/grid',
    //             parentId: 81
    //         },
    //         {
    //             id: 88,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    //             link: '/ui/images',
    //             parentId: 81
    //         },
    //         {
    //             id: 88,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
    //             link: '/ui/lightbox',
    //             parentId: 81
    //         },
    //         {
    //             id: 89,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    //             link: '/ui/modals',
    //             parentId: 81
    //         },
    //         {
    //             id: 90,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    //             link: '/ui/rangeslider',
    //             parentId: 81
    //         },
    //         {
    //             id: 91,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    //             link: '/ui/progressbar',
    //             parentId: 81
    //         },
    //         {
    //             id: 92,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
    //             link: '/ui/placeholder',
    //             parentId: 81
    //         },
    //         {
    //             id: 93,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    //             link: '/ui/sweet-alert',
    //             parentId: 81
    //         },
    //         {
    //             id: 94,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
    //             link: '/ui/tabs-accordions',
    //             parentId: 81
    //         },
    //         {
    //             id: 95,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    //             link: '/ui/typography',
    //             parentId: 81
    //         },
    //         {
    //             id: 96,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    //             link: '/ui/video',
    //             parentId: 81
    //         },
    //         {
    //             id: 97,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    //             link: '/ui/general',
    //             parentId: 81
    //         },
    //         {
    //             id: 98,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
    //             link: '/ui/colors',
    //             parentId: 81
    //         },
    //         {
    //             id: 99,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
    //             link: '/ui/image-crop',
    //             parentId: 81
    //         },
    //     ]
    // },
    // {
    //     id: 100,
    //     label: 'MENUITEMS.FORMS.TEXT',
    //     icon: 'bxs-eraser',
    //     badge: {
    //         variant: 'danger',
    //         text: 'MENUITEMS.FORMS.BADGE',
    //     },
    //     subItems: [
    //         {
    //             id: 101,
    //             label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
    //             link: '/form/elements',
    //             parentId: 100
    //         },
    //         {
    //             id: 102,
    //             label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
    //             link: '/form/layouts',
    //             parentId: 100
    //         },
    //         {
    //             id: 103,
    //             label: 'MENUITEMS.FORMS.LIST.VALIDATION',
    //             link: '/form/validation',
    //             parentId: 100
    //         },
    //         {
    //             id: 104,
    //             label: 'MENUITEMS.FORMS.LIST.ADVANCED',
    //             link: '/form/advanced',
    //             parentId: 100
    //         },
    //         {
    //             id: 105,
    //             label: 'MENUITEMS.FORMS.LIST.EDITOR',
    //             link: '/form/editor',
    //             parentId: 100
    //         },
    //         {
    //             id: 106,
    //             label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
    //             link: '/form/uploads',
    //             parentId: 100
    //         },
    //         {
    //             id: 107,
    //             label: 'MENUITEMS.FORMS.LIST.REPEATER',
    //             link: '/form/repeater',
    //             parentId: 100
    //         },
    //         {
    //             id: 108,
    //             label: 'MENUITEMS.FORMS.LIST.WIZARD',
    //             link: '/form/wizard',
    //             parentId: 100
    //         },
    //         {
    //             id: 109,
    //             label: 'MENUITEMS.FORMS.LIST.MASK',
    //             link: '/form/mask',
    //             parentId: 100
    //         }
    //     ]
    // },
    // {
    //     id: 110,
    //     icon: 'bx-list-ul',
    //     label: 'MENUITEMS.TABLES.TEXT',
    //     subItems: [
    //         {
    //             id: 111,
    //             label: 'MENUITEMS.TABLES.LIST.BASIC',
    //             link: '/tables/basic',
    //             parentId: 110
    //         },
    //         {
    //             id: 112,
    //             label: 'MENUITEMS.TABLES.LIST.ADVANCED',
    //             link: '/tables/advanced',
    //             parentId: 110
    //         }
    //     ]
    // },
    {
        id: 113,
        icon: 'bxs-bar-chart-alt-2',
        label: 'Graphiques',
        subItems: [
            // {
            //     id: 114,
            //     label: 'Masse salariale',
            //     link: '/charts/apex',
            //     parentId: 113
            // },
            {
                id: 115,
                label: 'Statistiques',
                link: '/charts/chartjs',
                parentId: 113
            },
            // {
            //     id: 116,
            //     label: 'Libellé absentéisme',
            //     link: '/charts/chartist',
            //     parentId: 113
            // },
            // {
            //     id: 117,
            //     label: 'Gestion effectif EFFECTIF',
            //     link: '/charts/echart',
            //     parentId: 113
            // }
        ]
    },
    // {
    //     id: 118,
    //     label: 'MENUITEMS.ICONS.TEXT',
    //     icon: 'bx-aperture',
    //     subItems: [
    //         {
    //             id: 119,
    //             label: 'MENUITEMS.ICONS.LIST.BOXICONS',
    //             link: '/icons/boxicons',
    //             parentId: 118
    //         },
    //         {
    //             id: 120,
    //             label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    //             link: '/icons/materialdesign',
    //             parentId: 118
    //         },
    //         {
    //             id: 121,
    //             label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
    //             link: '/icons/dripicons',
    //             parentId: 118
    //         },
    //         {
    //             id: 122,
    //             label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    //             link: '/icons/fontawesome',
    //             parentId: 118
    //         },
    //     ]
    // },
    // {
    //     id: 123,
    //     label: 'MENUITEMS.MAPS.TEXT',
    //     icon: 'bx-map',
    //     subItems: [
    //         {
    //             id: 124,
    //             label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //             link: '/maps/google',
    //             parentId: 123
    //         }
    //     ]
    // },
    // {
    //     id: 125,
    //     label: 'MENUITEMS.MULTILEVEL.TEXT',
    //     icon: 'bx-share-alt',
    //     subItems: [
    //         {
    //             id: 126,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //             link: '#',
    //             parentId: 125
    //         },
    //         {
    //             id: 127,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //             parentId: 125,
    //             subItems: [
    //                 {
    //                     id: 128,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                     parentId: 127,
    //                 },
    //                 {
    //                     id: 129,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                     parentId: 127,
    //                 }
    //             ]
    //         },
    //     ]
    // }

    {
            id: 125,
            label: 'Bulletin de soin',
            icon: 'bx-share-alt',
            subItems: [
                {
                    id: 126,
                    label: 'Consultation bulletin de soin',
                    link: '/bsoin/bsoin',
                    parentId: 125
                },
               

            ]
        },
    {
            id: 126,
            label: 'Prêt avance',
            icon: 'bx-wallet-alt',
            subItems: [
                {
                    id: 128,
                    label: 'Consultation prêt avance',
                    link: '/pret-avance/pret-avance',
                    parentId: 126
                },
                {
                    id: 129,
                    label: 'Consultation opposition',
                    link: '/opposition/consltoppo',
                    parentId: 126
                },
            

            ]
        },


        // {
        //     id: 126,
        //     label: 'Pointage',
        //     icon: 'bx bx-time',
        //     subItems: [
        //         {
        //             id: 128,
        //             label: 'Consultation pointage',
        //             link: '/pointage/pointage',
        //             parentId: 126
        //         },
        //         {
        //             id: 128,
        //             label: 'Consultation retard',
        //             link: '/pointage/retard',
        //             parentId: 126
        //         },
        //         {
        //             id: 129,
        //             label: 'Consultation autorisation',
        //             link: '/pointage/autorisation',
        //             parentId: 126
        //         },
        //         {
        //             id: 130,
        //             label: 'Consultation congé',
        //             link: '/pointage/conge',
        //             parentId: 126
        //         }


        //     ]
        // },

        {
            id: 127,
            label: 'Espace Chef',
            icon: 'bx bx-user-pin',
            isLayout:true,
            subItems: [
                {
                    id: 129,
                    label: 'Consultation espace chef',
                    link: '/EspaceChef/Chef',
                    parentId: 127
                },


                {
                    id: 130,
                    label: 'Consultation historique ',
                    link: '/EspaceChef/historique',
                    parentId: 127
                },
                {
                    id: 131,
                    label: 'Pointage',
                    icon: 'bx bx-time',
                    subItems: [
                        {
                            id: 128,
                            label: 'Consultation pointage',
                            link: '/pointage/pointage',
                            parentId: 131
                        },
                        {
                            id: 129,
                            label: 'Consultation retard',
                            link: '/pointage/retard',
                            parentId: 131
                        },
                        {
                            id: 130,
                            label: 'Consultation autorisation',
                            link: '/pointage/autorisation',
                            parentId: 131
                        },
                        {
                            id: 131,
                            label: 'Consultation congé',
                            link: '/pointage/conge',
                            parentId: 131
                        }


                    ]
                },
                {
                    id: 132,
                    label: 'Consultation Collaborateur',
                    icon: 'bx-store',
                    subItems: [
                        {
                            id: 201,
                            label: 'Informations personnel',
                            link: '/EspaceCollaborateur/infopers',
                            parentId: 13
                        },
                        {
                            id: 202,
                            label: 'Informations professionel',
                            link: '/EspaceCollaborateur/infoprof',
                            parentId: 13
                        },
                        {
                            id: 203,
                            label: 'Informations sociale',
                            link: '/EspaceCollaborateur/infosoc',
                            parentId: 13
                        },


                    ]
                },
                {
                    id: 133,
                    label: 'Consultation contrat ',
                    link: '/contrat/contrat',
                    parentId: 127
                },
                {
                    id: 134,
                    label: 'Objectif',
                    link: '/objectif/objectif',
                    parentId: 127
                },
                {
                    id: 135,
                    label: 'Compétence',
                    link: '/competence/competence',
                    parentId: 127
                },
                {
                    id: 136,
                    label: 'Evaluation',
                    link: '/EspaceChef/evaluation',
                    parentId: 127
                },
               
            
                
            ]

        },
        {
            id: 128,
            label: 'Espace Rh',
            icon: 'bx bx-user-pin',
            isRh:true,
            subItems: [
                {
                    id: 130,
                    label: 'Consultation espace Rh',
                    link: '/EspaceRh/Rh',
                    parentId: 128
                },


                {
                    id: 131,
                    label: 'Consultation historique ',
                    link: '/EspaceRh/historique',
                    parentId: 128
                },
                {
                    id: 132,
                    label: 'Consultation opposition ',
                    link: '/opposition/consltoppoRh',
                    parentId: 128
                },
                {
                    id: 133,
                    label: 'Consultation Conge ',
                    link: '/conge/soldeRh',
                    parentId: 128
                },
                {
                    id: 133,
                    label: 'Consultation Paie ',
                    link: '/paie/bulletin-paie-Rh',
                    parentId: 128
                },
                {
                    id: 134,
                    label: 'Ajouter evenement',
                    link: '/blog/list',
                    parentId: 128
                },
                {
                    id: 135,
                    label: 'Compétence',
                    link: '/competence/competence',
                    parentId: 128
                },
            ]
        },
        {
            id: 129,
            label: 'Espace Admin',
            icon: 'bx bx-user-pin',
            isAdmin:true,
            subItems: [
                {
                    id: 134,
                    label: 'Espace admin',
                    link: '/Admin/admin',
                    parentId: 129
                },



            ]
        }
];

