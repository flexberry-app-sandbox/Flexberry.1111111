﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.111111
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Склады.
    /// </summary>
    // *** Start programmer edit section *** (Склады CustomAttributes)

    // *** End programmer edit section *** (Склады CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СкладыE", new string[] {
            "Склад as \'Склад\'"})]
    [View("СкладыL", new string[] {
            "Склад as \'Склад\'"})]
    public class Склады : ICSSoft.STORMNET.DataObject
    {
        
        private string fСклад;
        
        // *** Start programmer edit section *** (Склады CustomMembers)

        // *** End programmer edit section *** (Склады CustomMembers)

        
        /// <summary>
        /// Склад.
        /// </summary>
        // *** Start programmer edit section *** (Склады.Склад CustomAttributes)

        // *** End programmer edit section *** (Склады.Склад CustomAttributes)
        [StrLen(255)]
        public virtual string Склад
        {
            get
            {
                // *** Start programmer edit section *** (Склады.Склад Get start)

                // *** End programmer edit section *** (Склады.Склад Get start)
                string result = this.fСклад;
                // *** Start programmer edit section *** (Склады.Склад Get end)

                // *** End programmer edit section *** (Склады.Склад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склады.Склад Set start)

                // *** End programmer edit section *** (Склады.Склад Set start)
                this.fСклад = value;
                // *** Start programmer edit section *** (Склады.Склад Set end)

                // *** End programmer edit section *** (Склады.Склад Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СкладыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СкладыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СкладыE", typeof(IIS.111111.Склады));
                }
            }
            
            /// <summary>
            /// "СкладыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СкладыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СкладыL", typeof(IIS.111111.Склады));
                }
            }
        }
    }
}
