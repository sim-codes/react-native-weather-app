export type Data = {
    data: APIData
}

export type Main = {
    temp: string,
    feels_like: string,
}

export type Weather = {
    main: string,
    description: string,
}

export type List = {
    main: Main,
    weather: Array<Weather>,
    dt_txt: string,
}
  
export type APIData = {
    weather: Array<Main>,
    city: string,
    list: Array<List>,
}

export type ItemProps = {
    title: string,
    datetime: string,
    icon: string,
    temp: string
  };