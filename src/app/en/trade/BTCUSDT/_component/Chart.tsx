'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'
import Tabs from '@/components/tabs/Tabs'
import { useScreenSizeCheck } from '@/hooks/useScreenSize'
import { generateCandleStickData } from '@/lib/dataGenerators'
const tabs = [
  {
    label: 'Chart',
    content: <div>Chart Content</div>,
  },
  {
    label: 'Info',
    content: <div>Info Content</div>,
  },
  {
    label: 'Trading Data',
    content: <div>Trading Data Content</div>,
  },
  {
    label: 'Square',
    content: <div>Square Content</div>,
  },
]

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})
export default function Chart() {
  const isTablet = useScreenSizeCheck(1024)

  const [candleStickData, setCandleStickData] = useState<
    { x: Date; y: number[] }[]
  >([])

  useEffect(() => {
    const data = generateCandleStickData(60)
    setCandleStickData(data)
  }, [])

  const [state, setState] = useState<{
    series: { name: string; data: { x: Date; y: number[] }[] }[]
    options: ApexOptions
  }>({
    series: [
      {
        name: 'CandleStick Data',
        data: [],
      },
    ],
    options: {
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#0ECB81',
            downward: '#F6465D',
          },
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: 'candlestick',
      },
      tooltip: {
        enabled: true,
        shared: false,
        followCursor: false,
        custom: function () {
          return ''
        },
        theme: 'dark',
        style: {
          fontSize: '0px',
          fontFamily: undefined,
        },
      },
      xaxis: {
        labels: {
          style: {
            colors: '#bcbcbc',
          },

          format: 'dd/MM',
          datetimeFormatter: {
            year: 'yyyy',
            month: "MM 'yy",
            day: 'DD MM',
            hour: 'HH:mm',
            minute: 'HH:mm:ss',
            second: 'HH:mm:ss',
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#575757',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0,
        },
        type: 'datetime',
        tooltip: {
          enabled: true,
          formatter: function (val) {
            const date = new Date(val)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1
            const day = String(date.getDate()).padStart(2, '0')
            const hours = String(date.getHours()).padStart(2, '0')
            const minutes = String(date.getMinutes()).padStart(2, '0')
            return `${year}/${month}/${day} ${hours}:${minutes}`
          },
        },
        crosshairs: {
          width: 1,
          stroke: {
            color: '#bcbcbc', // 선 색상
            dashArray: 4, // 점선 스타일
          },
        },
      },

      yaxis: {
        forceNiceScale: true,
        decimalsInFloat: 2,
        stepSize: 4,
        tickAmount: 5,
        labels: {
          formatter: function (value, index) {
            return index === 0 || index === 5 ? '' : value.toFixed(2) // 첫 번째와 마지막 라벨은 빈 문자열
          },
          style: {
            colors: '#bcbcbc',
          },
        },

        tooltip: {
          enabled: true,
          offsetX: -20,
        },
        opposite: true, // Y축을 오른쪽으로 이동
        axisBorder: {
          show: true, // y축 레이블 옆에 선 표시
          color: '#494949', // 축의 색상
          offsetX: -1, // 레이블 옆 선의 위치
        },
        crosshairs: {
          stroke: {
            color: '#bcbcbc', // 선 색상
            dashArray: 4, // 점선 스타일
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#494949',
        position: 'back',
        strokeDashArray: 0, // 그리드 점선 스타일
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: -30,
          bottom: 0,
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },

      annotations: {
        yaxis: [
          {
            y: candleStickData[candleStickData.length - 1]?.y[3], // 최신 Close 값
            y2: null,
            borderColor: 'transparent',

            label: {
              position: 'right',

              offsetX: 65,
              borderColor: '#FF4560',
              style: {
                color: '#fff',
                background: '#FF4560',
                fontSize: '12px',
                fontWeight: 'bold',
              },
              text: `${candleStickData[
                candleStickData.length - 1
              ]?.y[3].toFixed(2)}`, // 최신 Close 값 표시
            },
          },
        ],
      },
    } as ApexOptions,
  })

  useEffect(() => {
    if (candleStickData.length > 0) {
      setState((prevState) => ({
        ...prevState,
        series: [
          {
            name: 'CandleStick Data',
            data: candleStickData,
          },
        ],
        options: {
          ...prevState.options,
          annotations: {
            yaxis: [
              {
                y: candleStickData[candleStickData.length - 1]?.y[3], // 최신 Close 값
                y2: null,
                borderColor: 'transparent',

                label: {
                  position: 'right',

                  offsetX: 65,
                  borderColor: '#FF4560',
                  style: {
                    color: '#fff',
                    background: '#FF4560',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  },
                  text: `${candleStickData[
                    candleStickData.length - 1
                  ]?.y[3].toFixed(2)}`, // 최신 Close 값 표시
                },
              },
            ],
          },
        },
      }))
    }
  }, [candleStickData])

  return (
    <section className='chart !bg-basicBg card-ui'>
      <Tabs tabs={tabs} actionButton={<div></div>} />
      <div className='flex justify-between px-[16px] border-b-line border-b-[1px] min-h-[40px] h-[40px]'>
        <div className='flex gap-[8px] h-full items-center'>
          <div className='chart-control-btn active'>Time</div>
          <div className='chart-control-btn '>1s</div>
          <div className='chart-control-btn '>15m</div>
          <div className='chart-control-btn '>1H</div>
          <div className='chart-control-btn '>1D</div>
          <div className='chart-control-btn '>1W</div>
        </div>
        <div className='flex gap-[8px] h-full items-center'>
          <div className='chart-control-btn active'>Original</div>
          <div className='chart-control-btn '>Trading View</div>
          <div className='chart-control-btn '>Depth</div>
        </div>
      </div>

      <div id='chart'>
        <ReactApexChart
          type='candlestick'
          series={state.series}
          options={state.options}
          height={isTablet ? 305 : 442} //305 // 442
        />
      </div>
    </section>
  )
}
