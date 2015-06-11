    /**********
    *   // get full state name from abbreviation
    *
    * @param    Abbreviation
    * @return   State Full Name
    *
    ***********************************/
    
    function getState(state){
        switch (state) {
            // find full State Name
            case 'AK':
            state = 'Alaska';
            break;
            case 'AL':
            state = 'Alabama';
            break;
            case 'AZ':
            state = 'Arizona';
            break;
            case 'AR':
            state = 'Arkansas';
            break;
            case 'CA':
            state = 'California';
            break;
            case 'CO':
            state = 'Colorado';
            break;
            case 'CT':
            state = 'Connecticut';
            break;
            case 'DE':
            state = 'Delaware';
            break;
            case 'FL':
            state = 'Florida';
            break;
            case 'GA':
            state = 'Georgia';
            break;
            case 'HI':
            state = 'Hawaii';
            break;
            case 'ID':
            state = 'Idaho';
            break;
            case 'IL':
            state = 'Illinois';
            break;
            case 'IN':
            state = 'Indiana';
            break;
            case 'IA':
            state = 'Iowa';
            break;
            case 'KS':
            state = 'Kansas';
            break;
            case 'KY':
            state = 'Kentucky';
            break;
            case 'LA':
            state = 'Louisiana';
            break;
            case 'ME':
            state = 'Maine';
            break;
            case 'MD':
            state = 'Maryland';
            break;
            case 'MA':
            state = 'Massachusetts';
            break;
            case 'MI':
            state = 'Michigan';
            break;
            case 'MN':
            state = 'Minnesota';
            break;
            case 'MS':
            state = 'Mississippi';
            break;
            case 'MO':
            state = 'Missouri';
            break;
            case 'MT':
            state = 'Montana';
            break;
            case 'NE':
            state = 'Nebraska';
            break;
            case 'NV':
            state = 'Nevada';
            break;
            case 'NH':
            state = 'New Hampshire';
            break;
            case 'NJ':
            state = 'New Jersey';
            break;
            case 'NM':
            state = 'New Mexico';
            break;
            case 'NY':
            state = 'New York';
            break;
            case 'NC':
            state = 'North Carolina';
            break;
            case 'ND':
            state = 'North Dakota';
            break;
            case 'OH':
            state = 'Ohio';
            break;
            case 'OK':
            state = 'Oklahoma';
            break;
            case 'OR':
            state = 'Oregon';
            break;
            case 'PA':
            state = 'Pennsylvania';
            break;
            case 'RI':
            state = 'Rhode Island';
            break;
            case 'SC':
            state = 'South Carolina';
            break;
            case 'SD':
            state = 'South Dakota';
            break;
            case 'TN':
            state = 'Tennessee';
            break;
            case 'TX':
            state = 'Texas';
            break;
            case 'UT':
            state = 'Utah';
            break;
            case 'VT':
            state = 'Vermont';
            break;
            case 'VA':
            state = 'Virginia';
            break;
            case 'WA':
            state = 'Washington';
            break;
            case 'WV':
            state = 'West Virginia';
            break;
            case 'WI':
            state = 'Wisconsin';
            break;
            case 'WY':
            state = 'Wyoming';
            break;
            // default to All
            default:
            state = 'All';
                break;
        }
      return state;
    }
