export function getMenuTree() {
    return {
        fileMenu: [
            {
                header: 'New',
                items: [
                    {
                        header: 'Project'
                    },
                    {
                        header: 'Site'
                    },
                    {
                        header: 'File'
                    }
                ]
            },
            {
                header: 'Open'
            },
            {
                header: 'Save'
            },
            {
                header: 'Save As',
                items: [
                    {
                        header: 'Normal'
                    },
                    {
                        header: 'Compressed'
                    },
                    {
                        header: 'Encrypted'
                    }
                ]
            },
            {
                header: '-'
            },
            {
                header: 'Exit'
            }
        ],
        editMenu: [
            {
                header: 'Go to',
                items: [
                    {
                        header: 'Line'
                    },
                    {
                        header: 'Symbol'
                    },
                    {
                        header: 'File',
                        items: [
                            {
                                header: 'Current Project'
                            },
                            {
                                header: 'Current Solution'
                            },
                            {
                                header: 'Select...'
                            }
                        ]
                    }
                ]
            },
            {
                header: 'Find and Replace',
                items: [
                    {
                        header: 'Quick Find'
                    },
                    {
                        header: 'Quick Replace'
                    },
                    {
                        header: 'Find in Files'
                    },
                    {
                        header: 'Replace in Files',
                        items: [
                            {
                                header: 'All'
                            },
                            {
                                header: 'Read/Write Only'
                            }
                        ]
                    }
                ]
            },
            {
                header: '-'
            },
            {
                header: 'Undo'
            },
            {
                header: 'Redo'
            }
        ],
        formatMenu: [
            {
                header: 'Font',
                items: [
                    {
                        header: 'Family',
                        items: [
                            {
                                header: 'Arial',
                                prop: 'face'
                            },
                            {
                                header: 'Times',
                                prop: 'face'
                            },
                            {
                                header: 'Courier',
                                prop: 'face'
                            },
                            {
                                header: 'Verdana',
                                prop: 'face'
                            },
                            {
                                header: 'Georgia',
                                prop: 'face'
                            }
                        ]
                    },
                    {
                        header: 'Bold',
                        prop: 'font'
                    },
                    {
                        header: 'Italic',
                        prop: 'font'
                    },
                    {
                        header: 'Underline',
                        prop: 'font'
                    },
                    {
                        header: '-'
                    },
                    {
                        header: 'Larger',
                        prop: 'font'
                    },
                    {
                        header: 'Smaller',
                        prop: 'font'
                    }
                ]
            },
            {
                header: 'Color',
                items: [
                    {
                        header: 'Black',
                        prop: 'color'
                    },
                    {
                        header: 'Red',
                        prop: 'color'
                    },
                    {
                        header: 'Green',
                        prop: 'color'
                    },
                    {
                        header: 'Blue',
                        prop: 'color'
                    }
                ]
            },
            {
                header: 'Background',
                items: [
                    {
                        header: 'White',
                        prop: 'background'
                    },
                    {
                        header: 'Red',
                        prop: 'background'
                    },
                    {
                        header: 'Green',
                        prop: 'background'
                    },
                    {
                        header: 'Blue',
                        prop: 'background'
                    }
                ]
            }
        ]
    };
}
