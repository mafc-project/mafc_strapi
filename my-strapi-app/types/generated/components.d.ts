import type { Schema, Struct } from '@strapi/strapi';

export interface CalendarCalendar extends Struct.ComponentSchema {
  collectionName: 'components_calendar_calendars';
  info: {
    description: '';
    displayName: 'calendar';
  };
  attributes: {
    additional_set_date: Schema.Attribute.String & Schema.Attribute.Required;
    main_set_date: Schema.Attribute.String & Schema.Attribute.Required;
    stage: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConsultationConsultation extends Struct.ComponentSchema {
  collectionName: 'components_consultation_consultations';
  info: {
    displayName: 'consultation';
  };
  attributes: {
    classroom: Schema.Attribute.Integer & Schema.Attribute.Required;
    day: Schema.Attribute.String & Schema.Attribute.Required;
    discipline: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactContacts extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    description: '';
    displayName: 'contacts';
  };
  attributes: {
    adress: Schema.Attribute.String;
    birthday: Schema.Attribute.Date;
    credo: Schema.Attribute.String;
    disciplines: Schema.Attribute.Text;
    education: Schema.Attribute.Component<
      'teacher-education.teacher-education',
      true
    >;
    experience: Schema.Attribute.Integer;
    mail: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.JSON;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    professional_interests: Schema.Attribute.String;
    qualification: Schema.Attribute.String;
    specialty: Schema.Attribute.String;
    teacher_experience: Schema.Attribute.Component<
      'teacher-experience.teacher-experience',
      true
    >;
  };
}

export interface DashboardItemDashboardItem extends Struct.ComponentSchema {
  collectionName: 'components_dashboard_item_dashboard_items';
  info: {
    displayName: 'dashboard_item';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DepartmentDepartment extends Struct.ComponentSchema {
  collectionName: 'components_department_departments';
  info: {
    description: '';
    displayName: 'department';
  };
  attributes: {
    google_drive_doc_folder_id: Schema.Attribute.String;
    link: Schema.Attribute.Component<'link-item.link-item', false>;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
  };
}

export interface DisciplineDiscipline extends Struct.ComponentSchema {
  collectionName: 'components_discipline_disciplines';
  info: {
    displayName: 'discipline';
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Required;
    definition: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EduPlatformEduPlatform extends Struct.ComponentSchema {
  collectionName: 'components_edu_platform_edu_platforms';
  info: {
    description: '';
    displayName: 'edu_platform';
  };
  attributes: {
    deskription: Schema.Attribute.Text;
    login_link: Schema.Attribute.Component<'link-item.link-item', false> &
      Schema.Attribute.Required;
    ref_link: Schema.Attribute.Component<'link-item.link-item', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EntrantsRoadMapEntrantsRoadMap extends Struct.ComponentSchema {
  collectionName: 'components_entrants_road_map_entrants_road_maps';
  info: {
    displayName: 'entrants_road_map';
  };
  attributes: {
    description: Schema.Attribute.Text;
    road_map: Schema.Attribute.Component<'road-map.road-map', true>;
    title: Schema.Attribute.String;
  };
}

export interface ExtracurricularActivityExtracurricularActivity
  extends Struct.ComponentSchema {
  collectionName: 'components_extracurricular_activity_extracurricular_activities';
  info: {
    displayName: 'extracurricular_activity';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    poster: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormTitlesFormTitles extends Struct.ComponentSchema {
  collectionName: 'components_form_titles_form_titles';
  info: {
    displayName: 'formTitles';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GoogleDriveFolderIdGoogleDriveFolderId
  extends Struct.ComponentSchema {
  collectionName: 'components_google_drive_folder_id_google_drive_folder_ids';
  info: {
    displayName: 'google_drive_folderId';
  };
  attributes: {
    folder_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImageWidthTitleImageWidthTitle extends Struct.ComponentSchema {
  collectionName: 'components_image_width_title_image_width_titles';
  info: {
    displayName: 'image_width_title';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface LinkCardLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_link_card_link_cards';
  info: {
    displayName: 'link_card';
  };
  attributes: {
    decsription: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinkItemLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_link_item_link_items';
  info: {
    description: '';
    displayName: 'link_item';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PollItemPollItem extends Struct.ComponentSchema {
  collectionName: 'components_poll_item_poll_items';
  info: {
    description: '';
    displayName: 'poll_item';
  };
  attributes: {
    poll_item: Schema.Attribute.Component<'poll.poll', true>;
  };
}

export interface PollPoll extends Struct.ComponentSchema {
  collectionName: 'components_poll_polls';
  info: {
    displayName: 'poll';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['poll', 'result']>;
  };
}

export interface RoadMapRoadMap extends Struct.ComponentSchema {
  collectionName: 'components_road_map_road_maps';
  info: {
    displayName: 'road_map';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RtxItemRulesAndServices extends Struct.ComponentSchema {
  collectionName: 'components_rtx_item_rules_and_services';
  info: {
    description: '';
    displayName: 'rules_and_services';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ServiceAccountServiceAccount extends Struct.ComponentSchema {
  collectionName: 'components_service_account_service_accounts';
  info: {
    displayName: 'service_account';
  };
  attributes: {
    check_data: Schema.Attribute.String & Schema.Attribute.Required;
    IBAN: Schema.Attribute.String & Schema.Attribute.Required;
    organizationID: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'36969901'>;
    service_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'tiktok', 'youtube']
    >;
  };
}

export interface TeacherEducationTeacherEducation
  extends Struct.ComponentSchema {
  collectionName: 'components_teacher_education_teacher_educations';
  info: {
    description: '';
    displayName: 'teacher_education';
  };
  attributes: {
    institution: Schema.Attribute.String;
  };
}

export interface TeacherExperienceTeacherExperience
  extends Struct.ComponentSchema {
  collectionName: 'components_teacher_experience_teacher_experiences';
  info: {
    description: '';
    displayName: 'teacher_experience';
  };
  attributes: {
    experience: Schema.Attribute.String;
  };
}

export interface VacancyPositionVacancyPosition extends Struct.ComponentSchema {
  collectionName: 'components_vacancy_position_vacancy_positions';
  info: {
    displayName: 'vacancy_position';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    salary: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VideoItemVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_video_item_video_items';
  info: {
    displayName: 'video-item';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VideoSectionVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_video_section_video_sections';
  info: {
    description: '';
    displayName: 'video_section';
  };
  attributes: {
    audience: Schema.Attribute.Enumeration<['students,', 'teachers']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'students,'>;
    ids: Schema.Attribute.Component<'video-item.video-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'calendar.calendar': CalendarCalendar;
      'consultation.consultation': ConsultationConsultation;
      'contact.contacts': ContactContacts;
      'dashboard-item.dashboard-item': DashboardItemDashboardItem;
      'department.department': DepartmentDepartment;
      'discipline.discipline': DisciplineDiscipline;
      'edu-platform.edu-platform': EduPlatformEduPlatform;
      'entrants-road-map.entrants-road-map': EntrantsRoadMapEntrantsRoadMap;
      'extracurricular-activity.extracurricular-activity': ExtracurricularActivityExtracurricularActivity;
      'form-titles.form-titles': FormTitlesFormTitles;
      'google-drive-folder-id.google-drive-folder-id': GoogleDriveFolderIdGoogleDriveFolderId;
      'image-width-title.image-width-title': ImageWidthTitleImageWidthTitle;
      'link-card.link-card': LinkCardLinkCard;
      'link-item.link-item': LinkItemLinkItem;
      'poll-item.poll-item': PollItemPollItem;
      'poll.poll': PollPoll;
      'road-map.road-map': RoadMapRoadMap;
      'rtx-item.rules-and-services': RtxItemRulesAndServices;
      'service-account.service-account': ServiceAccountServiceAccount;
      'social.social': SocialSocial;
      'teacher-education.teacher-education': TeacherEducationTeacherEducation;
      'teacher-experience.teacher-experience': TeacherExperienceTeacherExperience;
      'vacancy-position.vacancy-position': VacancyPositionVacancyPosition;
      'video-item.video-item': VideoItemVideoItem;
      'video-section.video-section': VideoSectionVideoSection;
    }
  }
}
