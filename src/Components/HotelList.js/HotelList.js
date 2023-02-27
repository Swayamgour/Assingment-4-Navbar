import React from 'react'
import { nanoid } from 'nanoid'

function HotelList() {
    
    const data = [

        {
            id: nanoid(),
            city: 'kanpur',
            hotels: [
                {
                    id: nanoid(),
                    hotelName1: 'tolk of toun',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName2: 'The Landmark Tower'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName3: 'Kingsston Resort'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName4: "Fab Hotel Solitaire Inn "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }
                , {
                    id: nanoid(),
                    hotelName4: "Fab Hotel  "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                },
                [
                    {
                        id: nanoid(),
                        city: 'luncknow',
                        hotel: [
                            {
                                id: nanoid(),
                                hotelName1: 'tolk of toun'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                            }, {
                                id: nanoid(),
                                hotelName2: 'The Landmark Tower'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName3: 'Kingsston Resort'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName4: "Fab Hotel Solitaire Inn "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }
                            , {
                                id: nanoid(),
                                hotelName4: "Fab Hotel  "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, [
                                {
                                    id: nanoid(),
                                    city: 'kasmir',
                                    hotel: [
                                        {
                                            id: nanoid(),
                                            hotelName1: 'tolk of toun'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                        }, {
                                            id: nanoid(),
                                            hotelName2: 'The Landmark Tower'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName3: 'Kingsston Resort'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel Solitaire Inn "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }
                                        , {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel  "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, [
                                            {
                                                id: nanoid(),
                                                city: 'Mizoram',
                                                hotel: [
                                                    {
                                                        id: nanoid(),
                                                        hotelName1: 'tolk of toun'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                                    }, {
                                                        id: nanoid(),
                                                        hotelName2: 'The Landmark Tower'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName3: 'Kingsston Resort'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel Solitaire Inn "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }
                                                    , {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel  "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, [

                                                    ]

                                                ]
                                            }
                                        ]

                                    ]
                                }
                            ]

                        ]
                    }
                ]

            ]
        },
        {
            id: nanoid(),
            city: 'Nagaland',
            hotels: [
                {
                    id: nanoid(),
                    hotelName1: 'tolk of toun'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                }, {
                    id: nanoid(),
                    hotelName2: 'The Landmark Tower'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName3: 'Kingsston Resort'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName4: "Fab Hotel Solitaire Inn "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }
                , {
                    id: nanoid(),
                    hotelName4: "Fab Hotel  "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                },
                [
                    {
                        id: nanoid(),
                        city: 'Odisha',
                        hotel: [
                            {
                                id: nanoid(),
                                hotelName1: 'tolk of toun'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                            }, {
                                id: nanoid(),
                                hotelName2: 'The Landmark Tower'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName3: 'Kingsston Resort'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName4: "Fab Hotel Solitaire Inn "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }
                            , {
                                id: nanoid(),
                                hotelName4: "Fab Hotel  "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, [
                                {
                                    id: nanoid(),
                                    city: 'Punjab',
                                    hotel: [
                                        {
                                            id: nanoid(),
                                            hotelName1: 'tolk of toun'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                        }, {
                                            id: nanoid(),
                                            hotelName2: 'The Landmark Tower'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName3: 'Kingsston Resort'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel Solitaire Inn "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }
                                        , {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel  "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, [
                                            {
                                                id: nanoid(),
                                                city: 'Rajasthan',
                                                hotel: [
                                                    {
                                                        id: nanoid(),
                                                        hotelName1: 'tolk of toun'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                                    }, {
                                                        id: nanoid(),
                                                        hotelName2: 'The Landmark Tower'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName3: 'Kingsston Resort'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel Solitaire Inn "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }
                                                    , {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel  "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, [

                                                    ]

                                                ]
                                            }
                                        ]

                                    ]
                                }
                            ]

                        ]
                    }
                ]

            ]
        }, {
            id: nanoid(),
            city: 'Sikkim',
            hotels: [
                {
                    id: nanoid(),
                    hotelName1: 'tolk of toun'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                }, {
                    id: nanoid(),
                    hotelName2: 'The Landmark Tower'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName3: 'Kingsston Resort'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName4: "Fab Hotel Solitaire Inn "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }
                , {
                    id: nanoid(),
                    hotelName4: "Fab Hotel  "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                },
                [
                    {
                        id: nanoid(),
                        city: 'Tamil Nadu',
                        hotel: [
                            {
                                id: nanoid(),
                                hotelName1: 'tolk of toun'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                            }, {
                                id: nanoid(),
                                hotelName2: 'The Landmark Tower'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName3: 'Kingsston Resort'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName4: "Fab Hotel Solitaire Inn "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }
                            , {
                                id: nanoid(),
                                hotelName4: "Fab Hotel  "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'
                            }, [

                                {
                                    id: nanoid(),
                                    city: 'Telangana',
                                    hotel: [
                                        {
                                            id: nanoid(),
                                            hotelName1: 'tolk of toun'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                        }, {
                                            id: nanoid(),
                                            hotelName2: 'The Landmark Tower'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName3: 'Kingsston Resort'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel Solitaire Inn "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }
                                        , {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel  "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, [
                                            {
                                                id: nanoid(),
                                                city: 'Tripura',
                                                hotel: [
                                                    {
                                                        id: nanoid(),
                                                        hotelName1: 'tolk of toun'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                                    }, {
                                                        id: nanoid(),
                                                        hotelName2: 'The Landmark Tower'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName3: 'Kingsston Resort'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel Solitaire Inn "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }
                                                    , {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel  "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, [

                                                    ]

                                                ]
                                            }
                                        ]

                                    ]
                                }
                            ]

                        ]
                    }
                ]

            ]
        }, {
            id: nanoid(),
            city: 'UtterPardesh',
            hotels: [
                {
                    id: nanoid(),
                    hotelName1: 'tolk of toun'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                }, {
                    id: nanoid(),
                    hotelName2: 'The Landmark Tower'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName3: 'Kingsston Resort'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName4: "Fab Hotel Solitaire Inn "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }
                , {
                    id: nanoid(),
                    hotelName4: "Fab Hotel  "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                },
                [
                    {
                        id: nanoid(),
                        city: 'uttaraKhand',
                        hotel: [
                            {
                                id: nanoid(),
                                hotelName1: 'tolk of toun'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                            }, {
                                id: nanoid(),
                                hotelName2: 'The Landmark Tower'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName3: 'Kingsston Resort'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName4: "Fab Hotel Solitaire Inn "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }
                            , {
                                id: nanoid(),
                                hotelName4: "Fab Hotel  "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, [

                                {
                                    id: nanoid(),
                                    city: 'West Bengal',
                                    hotel: [
                                        {
                                            id: nanoid(),
                                            hotelName1: 'tolk of toun'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                        }, {
                                            id: nanoid(),
                                            hotelName2: 'The Landmark Tower'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName3: 'Kingsston Resort'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel Solitaire Inn "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }
                                        , {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel  "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, [
                                            {
                                                id: nanoid(),
                                                city: 'Andhra Pardesh',
                                                hotel: [
                                                    {
                                                        id: nanoid(),
                                                        hotelName1: 'tolk of toun'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                                    }, {
                                                        id: nanoid(),
                                                        hotelName2: 'The Landmark Tower'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName3: 'Kingsston Resort'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel Solitaire Inn "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }
                                                    , {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel  "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, [

                                                    ]

                                                ]
                                            }
                                        ]

                                    ]
                                }
                            ]

                        ]
                    }
                ]

            ]
        }, {
            id: nanoid(),
            city: 'Arunchal Pardesh',
            hotels: [
                {
                    id: nanoid(),
                    hotelName1: 'tolk of toun'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                }, {
                    id: nanoid(),
                    hotelName2: 'The Landmark Tower'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName3: 'Kingsston Resort'
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }, {
                    id: nanoid(),
                    hotelName4: "Fab Hotel Solitaire Inn "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                }
                , {
                    id: nanoid(),
                    hotelName4: "Fab Hotel  "
                    , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                },
                [
                    {
                        id: nanoid(),
                        city: 'Assam',
                        hotel: [
                            {
                                id: nanoid(),
                                hotelName1: 'tolk of toun'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                            }, {
                                id: nanoid(),
                                hotelName2: 'The Landmark Tower'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName3: 'Kingsston Resort'
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, {
                                id: nanoid(),
                                hotelName4: "Fab Hotel Solitaire Inn "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }
                            , {
                                id: nanoid(),
                                hotelName4: "Fab Hotel  "
                                , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                            }, [
                                {
                                    id: nanoid(),
                                    city: 'Bihar',
                                    hotel: [
                                        {
                                            id: nanoid(),
                                            hotelName1: 'tolk of toun'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                        }, {
                                            id: nanoid(),
                                            hotelName2: 'The Landmark Tower'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName3: 'Kingsston Resort'
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel Solitaire Inn "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }
                                        , {
                                            id: nanoid(),
                                            hotelName4: "Fab Hotel  "
                                            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                        }, [
                                            {
                                                id: nanoid(),
                                                city: 'Chhattisgarh',
                                                hotel: [
                                                    {
                                                        id: nanoid(),
                                                        hotelName1: 'tolk of toun'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'


                                                    }, {
                                                        id: nanoid(),
                                                        hotelName2: 'The Landmark Tower'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName3: 'Kingsston Resort'
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel Solitaire Inn "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }
                                                    , {
                                                        id: nanoid(),
                                                        hotelName4: "Fab Hotel  "
                                                        , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7TKITSUTaywnZE2XWJGLbVHBIt5FKS6IX0A&usqp=CAU'

                                                    }, [

                                                    ]

                                                ]
                                            }
                                        ]

                                    ]
                                }
                            ]

                        ]
                    }
                ]

            ]
        },
    ]

    console.log(data, "data")
    return (
        <div>
        </div>

    )
}

export default HotelList