import React from 'react';
import { Tab } from '@headlessui/react';
import database from '../data';
import SelectDropDown from '../components/SelectDropDown';
import LocationSearch from '../components/LocationSearch';
import DatePicker from '../components/DatePicker';
import FlightPasenger from '../components/FlightPasenger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function SearchTabs() {
  return (
    <div className='banner_search_box pt-4 px-4 pb-4 rounded-2xl relative'>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 searchTab',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 flex items-center',
              selected
                ? 'bg-deep shadow text-white'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }><FontAwesomeIcon style={{ fontSize: "20px", marginRight: "10px" }} icon={faPlaneDeparture}></FontAwesomeIcon> Flights</Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 searchTab',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-deep shadow text-white'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>Tab 2</Tab>
          <Tab className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 searchTab',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-deep shadow text-white'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className='top_counter_section'>
              <div className='counter_main_box'>
                <SelectDropDown member={database?.searchBoxData?.maxRoom}></SelectDropDown>
              </div>
              <div className='search_filter_boxs flex justify-between'>
                <div className='location_box'>
                  <label>Journey From</label>
                  <LocationSearch location={database?.searchLocation}></LocationSearch>

                </div>
                <div className='location_box'>
                  <label>Journey To</label>
                  <LocationSearch location={database?.searchLocation}></LocationSearch>
                </div>
                <div className='location_box' style={{ width: "180px" }}>
                  <label>Departing</label>
                  <DatePicker></DatePicker>
                </div>
                <div className='location_box' style={{ width: "300px" }}>
                  <label>Passenger, Class</label>
                  <FlightPasenger></FlightPasenger>

                </div>

              </div>

            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/*  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 */}
      <div className='find_next_button absolute'>
        <a href='#'>Find now</a>
      </div>
    </div>
  )
}

export default SearchTabs