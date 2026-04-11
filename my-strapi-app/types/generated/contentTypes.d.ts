import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAcademicMobilityPageAcademicMobilityPage
  extends Struct.SingleTypeSchema {
  collectionName: 'academic_mobility_pages';
  info: {
    displayName: 'AcademicMobilityPage';
    pluralName: 'academic-mobility-pages';
    singularName: 'academic-mobility-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::academic-mobility-page.academic-mobility-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityAndInclusiveLearningPageAccessibilityAndInclusiveLearningPage
  extends Struct.SingleTypeSchema {
  collectionName: 'accessibility_and_inclusive_learning_pages';
  info: {
    displayName: 'AccessibilityAndInclusiveLearningPage';
    pluralName: 'accessibility-and-inclusive-learning-pages';
    singularName: 'accessibility-and-inclusive-learning-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    images: Schema.Attribute.Media<'images', true>;
    insructions: Schema.Attribute.Component<
      'rtx-item.rules-and-services',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-and-inclusive-learning-page.accessibility-and-inclusive-learning-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdmiddionCommittePageAdmiddionCommittePage
  extends Struct.SingleTypeSchema {
  collectionName: 'admiddion_committe_pages';
  info: {
    description: '';
    displayName: 'AdmiddionCommittePage';
    pluralName: 'admiddion-committe-pages';
    singularName: 'admiddion-committe-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::admiddion-committe-page.admiddion-committe-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    work_schedule: Schema.Attribute.Component<
      'dashboard-item.dashboard-item',
      true
    >;
  };
}

export interface ApiAdministrationPageAdministrationPage
  extends Struct.SingleTypeSchema {
  collectionName: 'administration_pages';
  info: {
    description: '';
    displayName: 'ManagementSystemPage';
    pluralName: 'administration-pages';
    singularName: 'administration-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::administration-page.administration-page'
    > &
      Schema.Attribute.Private;
    organization_structure: Schema.Attribute.Media<'images'>;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    teachers: Schema.Attribute.Relation<'oneToMany', 'api::teacher.teacher'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAdmissionCalendarAdmissionCalendar
  extends Struct.CollectionTypeSchema {
  collectionName: 'admission_calendars';
  info: {
    description: '';
    displayName: 'admission-calendar';
    pluralName: 'admission-calendars';
    singularName: 'admission-calendar';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    calendar: Schema.Attribute.Component<'calendar.calendar', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::admission-calendar.admission-calendar'
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    type: Schema.Attribute.Enumeration<['base', 'fool']> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'base'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAnimalHusbandryLaboratoryPageAnimalHusbandryLaboratoryPage
  extends Struct.SingleTypeSchema {
  collectionName: 'animal_husbandry_laboratory_pages';
  info: {
    displayName: 'AnimalHusbandryLaboratoryPage';
    pluralName: 'animal-husbandry-laboratory-pages';
    singularName: 'animal-husbandry-laboratory-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::animal-husbandry-laboratory-page.animal-husbandry-laboratory-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAwardsAndDistinctionPageAwardsAndDistinctionPage
  extends Struct.SingleTypeSchema {
  collectionName: 'awards_and_distinction_pages';
  info: {
    displayName: 'AwardsAndDistinctionPage';
    pluralName: 'awards-and-distinction-pages';
    singularName: 'awards-and-distinction-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    images: Schema.Attribute.Component<
      'image-width-title.image-width-title',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::awards-and-distinction-page.awards-and-distinction-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBankAccountPageBankAccountPage
  extends Struct.SingleTypeSchema {
  collectionName: 'bank_account_pages';
  info: {
    displayName: 'BankAccountPage';
    pluralName: 'bank-account-pages';
    singularName: 'bank-account-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    account: Schema.Attribute.Component<
      'service-account.service-account',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bank-account-page.bank-account-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerOrientationAndImageFormationCareerOrientationAndImageFormation
  extends Struct.SingleTypeSchema {
  collectionName: 'career_orientation_and_image_formations';
  info: {
    displayName: 'CareerOrientationAndImageFormation';
    pluralName: 'career-orientation-and-image-formations';
    singularName: 'career-orientation-and-image-formation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-orientation-and-image-formation.career-orientation-and-image-formation'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClassroomAndLaboratoryClassroomAndLaboratory
  extends Struct.SingleTypeSchema {
  collectionName: 'classroom_and_laboratories';
  info: {
    description: '';
    displayName: 'ClassroomAndLaboratory';
    pluralName: 'classroom-and-laboratories';
    singularName: 'classroom-and-laboratory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::classroom-and-laboratory.classroom-and-laboratory'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollegeHistoryPageCollegeHistoryPage
  extends Struct.SingleTypeSchema {
  collectionName: 'college_history_pages';
  info: {
    displayName: 'CollegeHistoryPage';
    pluralName: 'college-history-pages';
    singularName: 'college-history-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::college-history-page.college-history-page'
    > &
      Schema.Attribute.Private;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollegeVacancyCollegeVacancy
  extends Struct.SingleTypeSchema {
  collectionName: 'college_vacancies';
  info: {
    displayName: 'college_vacancy';
    pluralName: 'college-vacancies';
    singularName: 'college-vacancy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companies: Schema.Attribute.Relation<'oneToMany', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::college-vacancy.college-vacancy'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommonPoolCommonPool extends Struct.CollectionTypeSchema {
  collectionName: 'common_pools';
  info: {
    description: '';
    displayName: 'common_pool';
    pluralName: 'common-pools';
    singularName: 'common-pool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::common-pool.common-pool'
    > &
      Schema.Attribute.Private;
    poll_item: Schema.Attribute.Component<'poll-item.poll-item', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Struct.CollectionTypeSchema {
  collectionName: 'companies';
  info: {
    description: '';
    displayName: 'company';
    pluralName: 'companies';
    singularName: 'company';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contacts: Schema.Attribute.Component<'contact.contacts', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    links: Schema.Attribute.Component<'link-item.link-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company.company'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vacancy: Schema.Attribute.Component<
      'vacancy-position.vacancy-position',
      true
    >;
  };
}

export interface ApiConceptualPrinciplesPageConceptualPrinciplesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'conceptual_principles_pages';
  info: {
    description: '';
    displayName: 'ConceptualPrinciplesPage';
    pluralName: 'conceptual-principles-pages';
    singularName: 'conceptual-principles-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    edu_process_participants_folder_id: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    educational_process_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::conceptual-principles-page.conceptual-principles-page'
    > &
      Schema.Attribute.Private;
    personality_orientation: Schema.Attribute.Component<
      'rtx-item.rules-and-services',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactsPageContactsPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'contacts_pages';
  info: {
    description: '';
    displayName: 'contacts_data';
    pluralName: 'contacts-pages';
    singularName: 'contacts-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contacts: Schema.Attribute.Relation<'oneToMany', 'api::teacher.teacher'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formTitles: Schema.Attribute.Component<'form-titles.form-titles', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contacts-page.contacts-page'
    > &
      Schema.Attribute.Private;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    side_title: Schema.Attribute.String & Schema.Attribute.Required;
    sub_title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCouncilsAndCommissionsPageCouncilsAndCommissionsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'councils_and_commissions_pages';
  info: {
    displayName: 'CouncilsAndCommissionsPage';
    pluralName: 'councils-and-commissions-pages';
    singularName: 'councils-and-commissions-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    all_commission_folder_id: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::councils-and-commissions-page.councils-and-commissions-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    pedagogical_council_folder_id: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDegreeEducationPageDegreeEducationPage
  extends Struct.SingleTypeSchema {
  collectionName: 'degree_education_pages';
  info: {
    displayName: 'DegreeEducationPage';
    pluralName: 'degree-education-pages';
    singularName: 'degree-education-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::degree-education-page.degree-education-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    universities: Schema.Attribute.Component<'link-card.link-card', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDepartmentPageDepartmentPage
  extends Struct.SingleTypeSchema {
  collectionName: 'department_pages';
  info: {
    displayName: 'DepartmentPage';
    pluralName: 'department-pages';
    singularName: 'department-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::department-page.department-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDevelopmentOfAcademicIntegrityDevelopmentOfAcademicIntegrity
  extends Struct.SingleTypeSchema {
  collectionName: 'development_of_academic_integrities';
  info: {
    displayName: 'DevelopmentOfAcademicIntegrity';
    pluralName: 'development-of-academic-integrities';
    singularName: 'development-of-academic-integrity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::development-of-academic-integrity.development-of-academic-integrity'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDiscussionPageDiscussionPage
  extends Struct.SingleTypeSchema {
  collectionName: 'discussion_pages';
  info: {
    displayName: 'DiscussionPage';
    pluralName: 'discussion-pages';
    singularName: 'discussion-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::discussion-page.discussion-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDistanceLearningPageDistanceLearningPage
  extends Struct.SingleTypeSchema {
  collectionName: 'distance_learning_pages';
  info: {
    description: '';
    displayName: 'distance_learning_page';
    pluralName: 'distance-learning-pages';
    singularName: 'distance-learning-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    administrator: Schema.Attribute.Relation<
      'oneToMany',
      'api::teacher.teacher'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    edu_platform: Schema.Attribute.Component<
      'edu-platform.edu-platform',
      false
    > &
      Schema.Attribute.Required;
    form_link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::distance-learning-page.distance-learning-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video_section: Schema.Attribute.Component<
      'video-section.video-section',
      true
    >;
  };
}

export interface ApiDomitoryGovernmentDomitoryGovernment
  extends Struct.CollectionTypeSchema {
  collectionName: 'domitory_governments';
  info: {
    description: '';
    displayName: 'DomitoryGovernment';
    pluralName: 'domitory-governments';
    singularName: 'domitory-government';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::domitory-government.domitory-government'
    > &
      Schema.Attribute.Private;
    mail: Schema.Attribute.Email;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    social: Schema.Attribute.Component<'social.social', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDomitoryPageDomitoryPage extends Struct.SingleTypeSchema {
  collectionName: 'domitory_pages';
  info: {
    description: '';
    displayName: 'domitory_page';
    pluralName: 'domitory-pages';
    singularName: 'domitory-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    domitory_governments: Schema.Attribute.Relation<
      'oneToMany',
      'api::domitory-government.domitory-government'
    >;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::domitory-page.domitory-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDualFormOfLearningPageDualFormOfLearningPage
  extends Struct.SingleTypeSchema {
  collectionName: 'dual_form_of_learning_pages';
  info: {
    displayName: 'DualFormOfLearningPage';
    pluralName: 'dual-form-of-learning-pages';
    singularName: 'dual-form-of-learning-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    image: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dual-form-of-learning-page.dual-form-of-learning-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Component<'video-item.video-item', true>;
  };
}

export interface ApiELibraryELibrary extends Struct.CollectionTypeSchema {
  collectionName: 'e_libraries';
  info: {
    displayName: 'e_library';
    pluralName: 'e-libraries';
    singularName: 'e-library';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    link: Schema.Attribute.Component<'link-item.link-item', false> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::e-library.e-library'
    > &
      Schema.Attribute.Private;
    profession: Schema.Attribute.Relation<
      'oneToOne',
      'api::profession.profession'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEducationalAccountingEducationalAccounting
  extends Struct.SingleTypeSchema {
  collectionName: 'educational_accountings';
  info: {
    description: '';
    displayName: 'educational_accounting';
    pluralName: 'educational-accountings';
    singularName: 'educational-accounting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::educational-accounting.educational-accounting'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEducationalActivitiesPageEducationalActivitiesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'educational_activities_pages';
  info: {
    displayName: 'EducationalActivitiesPage';
    pluralName: 'educational-activities-pages';
    singularName: 'educational-activities-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::educational-activities-page.educational-activities-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEnrollmentOrderListEnrollmentOrderList
  extends Struct.CollectionTypeSchema {
  collectionName: 'enrollment_order_lists';
  info: {
    displayName: 'EnrollmentOrderList';
    pluralName: 'enrollment-order-lists';
    singularName: 'enrollment-order-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    google_drive_doc_folder_id: Schema.Attribute.String &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::enrollment-order-list.enrollment-order-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEnsuringTheQualityOfEducationPageEnsuringTheQualityOfEducationPage
  extends Struct.SingleTypeSchema {
  collectionName: 'ensuring_the_quality_of_education_pages';
  info: {
    description: '';
    displayName: 'EnsuringTheQualityOfEducationPage';
    pluralName: 'ensuring-the-quality-of-education-pages';
    singularName: 'ensuring-the-quality-of-education-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ensuring-the-quality-of-education-page.ensuring-the-quality-of-education-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExtracurricularActivitiesListExtracurricularActivitiesList
  extends Struct.CollectionTypeSchema {
  collectionName: 'extracurricular_activities_lists';
  info: {
    displayName: 'extracurricular_activities_list';
    pluralName: 'extracurricular-activities-lists';
    singularName: 'extracurricular-activities-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activity: Schema.Attribute.Component<
      'extracurricular-activity.extracurricular-activity',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::extracurricular-activities-list.extracurricular-activities-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExtracurricularActivitiesPageExtracurricularActivitiesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'extracurricular_activities_pages';
  info: {
    description: '';
    displayName: 'extracurricular__activities_page';
    pluralName: 'extracurricular-activities-pages';
    singularName: 'extracurricular-activities-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    extracurricular_activities_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::extracurricular-activities-list.extracurricular-activities-list'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::extracurricular-activities-page.extracurricular-activities-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFriendshipWidthBnauFriendshipWidthBnau
  extends Struct.SingleTypeSchema {
  collectionName: 'friendship_width_bnaus';
  info: {
    description: '';
    displayName: ' FriendshipWidthBnau';
    pluralName: 'friendship-width-bnaus';
    singularName: 'friendship-width-bnau';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::friendship-width-bnau.friendship-width-bnau'
    > &
      Schema.Attribute.Private;
    news: Schema.Attribute.Relation<'oneToMany', 'api::new.new'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGraduatorGraduator extends Struct.CollectionTypeSchema {
  collectionName: 'graduators';
  info: {
    displayName: 'Graduator';
    pluralName: 'graduators';
    singularName: 'graduator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::graduator.graduator'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profession: Schema.Attribute.Relation<
      'oneToOne',
      'api::profession.profession'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeroDataHeroData extends Struct.CollectionTypeSchema {
  collectionName: 'hero_datas';
  info: {
    description: '';
    displayName: 'hero_data';
    pluralName: 'hero-datas';
    singularName: 'hero-data';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'link-item.link-item', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hero-data.hero-data'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Component<'video-item.video-item', false>;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    description: '';
    displayName: 'home_page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    government_resourses: Schema.Attribute.Component<
      'link-card.link-card',
      true
    >;
    hero: Schema.Attribute.Relation<'oneToMany', 'api::hero-data.hero-data'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    professions: Schema.Attribute.Relation<
      'oneToMany',
      'api::profession.profession'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHrDepartmentPageHrDepartmentPage
  extends Struct.SingleTypeSchema {
  collectionName: 'hr_department_pages';
  info: {
    displayName: 'HR_department_page';
    pluralName: 'hr-department-pages';
    singularName: 'hr-department-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hr-department-page.hr-department-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHusbandryActivityPageHusbandryActivityPage
  extends Struct.SingleTypeSchema {
  collectionName: 'husbandry_activity_pages';
  info: {
    displayName: ' HusbandryActivityPage';
    pluralName: 'husbandry-activity-pages';
    singularName: 'husbandry-activity-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    images: Schema.Attribute.Component<
      'image-width-title.image-width-title',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::husbandry-activity-page.husbandry-activity-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIntelligentNetworkingActivityIntelligentNetworkingActivity
  extends Struct.CollectionTypeSchema {
  collectionName: 'intelligent_networking_activities';
  info: {
    description: '';
    displayName: 'IntelligentNetworkingActivity';
    pluralName: 'intelligent-networking-activities';
    singularName: 'intelligent-networking-activity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activity: Schema.Attribute.Component<
      'extracurricular-activity.extracurricular-activity',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::intelligent-networking-activity.intelligent-networking-activity'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIntelligentNetworkingPageIntelligentNetworkingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'intelligent_networking_pages';
  info: {
    description: '';
    displayName: 'IntelligentNetworkingPage';
    pluralName: 'intelligent-networking-pages';
    singularName: 'intelligent-networking-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    images: Schema.Attribute.Component<
      'image-width-title.image-width-title',
      true
    >;
    intelligent_networking_activities: Schema.Attribute.Relation<
      'oneToMany',
      'api::intelligent-networking-activity.intelligent-networking-activity'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::intelligent-networking-page.intelligent-networking-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIntroductoryGuidePageIntroductoryGuidePage
  extends Struct.SingleTypeSchema {
  collectionName: 'introductory_guide_pages';
  info: {
    description: '';
    displayName: 'Introductory_guide_page';
    pluralName: 'introductory-guide-pages';
    singularName: 'introductory-guide-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    enrollment_order_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::enrollment-order-list.enrollment-order-list'
    >;
    entrance_documents_list: Schema.Attribute.JSON & Schema.Attribute.Required;
    entrance_exams_info: Schema.Attribute.Component<
      'rtx-item.rules-and-services',
      true
    >;
    entrants_road_map: Schema.Attribute.Component<
      'entrants-road-map.entrants-road-map',
      false
    >;
    initial_test_results_google_drive_folder: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::introductory-guide-page.introductory-guide-page'
    > &
      Schema.Attribute.Private;
    professions: Schema.Attribute.Relation<
      'oneToMany',
      'api::profession.profession'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearningByTeachingPageLearningByTeachingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'learning_by_teaching_pages';
  info: {
    displayName: 'LearningByTeachingPage';
    pluralName: 'learning-by-teaching-pages';
    singularName: 'learning-by-teaching-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learning-by-teaching-page.learning-by-teaching-page'
    > &
      Schema.Attribute.Private;
    note: Schema.Attribute.Component<'rtx-item.rules-and-services', true>;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLibraryLibrary extends Struct.SingleTypeSchema {
  collectionName: 'libraries';
  info: {
    description: '';
    displayName: 'library';
    pluralName: 'libraries';
    singularName: 'library';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dashboard: Schema.Attribute.Component<
      'dashboard-item.dashboard-item',
      true
    >;
    e_libraries: Schema.Attribute.Relation<
      'oneToMany',
      'api::e-library.e-library'
    >;
    google_drive_folder_id: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::library.library'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    rules: Schema.Attribute.Component<'rtx-item.rules-and-services', true>;
    services: Schema.Attribute.Component<'rtx-item.rules-and-services', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    work_schedule: Schema.Attribute.Component<
      'dashboard-item.dashboard-item',
      true
    >;
  };
}

export interface ApiMaterialTechnicalBaseMaterialTechnicalBase
  extends Struct.SingleTypeSchema {
  collectionName: 'material_technical_bases';
  info: {
    description: '';
    displayName: 'material_technical_base';
    pluralName: 'material-technical-bases';
    singularName: 'material-technical-base';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    characteristic: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::material-technical-base.material-technical-base'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMemoryPageMemoryPage extends Struct.SingleTypeSchema {
  collectionName: 'memory_pages';
  info: {
    description: '';
    displayName: 'MemoryPage';
    pluralName: 'memory-pages';
    singularName: 'memory-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::memory-page.memory-page'
    > &
      Schema.Attribute.Private;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Component<'video-item.video-item', true>;
  };
}

export interface ApiMethodicalOfficePageMethodicalOfficePage
  extends Struct.SingleTypeSchema {
  collectionName: 'methodical_office_pages';
  info: {
    displayName: 'MethodicalOfficePage';
    pluralName: 'methodical-office-pages';
    singularName: 'methodical-office-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::methodical-office-page.methodical-office-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMetodologicalCasePageMetodologicalCasePage
  extends Struct.SingleTypeSchema {
  collectionName: 'metodological_case_pages';
  info: {
    displayName: 'MetodologicalCasePage';
    pluralName: 'metodological-case-pages';
    singularName: 'metodological-case-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::metodological-case-page.metodological-case-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMissionAndGoalsPageMissionAndGoalsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'mission_and_goals_pages';
  info: {
    description: '';
    displayName: 'MissionAndGoalsPage';
    pluralName: 'mission-and-goals-pages';
    singularName: 'mission-and-goals-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mission-and-goals-page.mission-and-goals-page'
    > &
      Schema.Attribute.Private;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiModernWarMuseumModernWarMuseum
  extends Struct.SingleTypeSchema {
  collectionName: 'modern_war_museums';
  info: {
    displayName: 'ModernWarMuseum';
    pluralName: 'modern-war-museums';
    singularName: 'modern-war-museum';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::modern-war-museum.modern-war-museum'
    > &
      Schema.Attribute.Private;
    markdown: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewNew extends Struct.CollectionTypeSchema {
  collectionName: 'news';
  info: {
    description: '';
    displayName: 'News';
    pluralName: 'news';
    singularName: 'new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::new.new'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Component<'video-item.video-item', true>;
  };
}

export interface ApiNmtPageNmtPage extends Struct.CollectionTypeSchema {
  collectionName: 'nmt_pages';
  info: {
    description: '';
    displayName: 'nmt_link_list';
    pluralName: 'nmt-pages';
    singularName: 'nmt-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    links: Schema.Attribute.Component<'link-item.link-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nmt-page.nmt-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNmtNmt extends Struct.SingleTypeSchema {
  collectionName: 'nmts';
  info: {
    displayName: 'nmt';
    pluralName: 'nmts';
    singularName: 'nmt';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::nmt.nmt'> &
      Schema.Attribute.Private;
    nmt_link_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::nmt-page.nmt-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOptionalSubjectsPageOptionalSubjectsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'optional_subjects_pages';
  info: {
    displayName: 'OptionalSubjectsPage';
    pluralName: 'optional-subjects-pages';
    singularName: 'optional-subjects-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::optional-subjects-page.optional-subjects-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPartnersPagePartnersPage extends Struct.SingleTypeSchema {
  collectionName: 'partners_pages';
  info: {
    description: '';
    displayName: 'PartnersPage';
    pluralName: 'partners-pages';
    singularName: 'partners-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partners-page.partners-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPlantProductionLaboratoryPagePlantProductionLaboratoryPage
  extends Struct.SingleTypeSchema {
  collectionName: 'plant_production_laboratory_pages';
  info: {
    description: '';
    displayName: 'PlantProductionLaboratoryPage';
    pluralName: 'plant-production-laboratory-pages';
    singularName: 'plant-production-laboratory-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::plant-production-laboratory-page.plant-production-laboratory-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPracticalTrainingPagePracticalTrainingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'practical_training_pages';
  info: {
    displayName: 'PracticalTrainingPage';
    pluralName: 'practical-training-pages';
    singularName: 'practical-training-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::practical-training-page.practical-training-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProfessionProfession extends Struct.CollectionTypeSchema {
  collectionName: 'professions';
  info: {
    description: '';
    displayName: 'profession';
    pluralName: 'professions';
    singularName: 'profession';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    discipline: Schema.Attribute.Component<'discipline.discipline', false>;
    educational_program: Schema.Attribute.String & Schema.Attribute.Required;
    google_drive_doc_folder_id: Schema.Attribute.String;
    graduate_profile: Schema.Attribute.Component<
      'rtx-item.rules-and-services',
      true
    >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::profession.profession'
    > &
      Schema.Attribute.Private;
    monitoring_and_updating_edu_program_golder_id: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    poll: Schema.Attribute.Component<'poll-item.poll-item', true>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'educational_program'> &
      Schema.Attribute.Required;
    speciality_rating_folder_id: Schema.Attribute.String;
    suggestion_box: Schema.Attribute.Component<'link-card.link-card', false>;
    term_of_study: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tuition_fees: Schema.Attribute.Integer & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRegulatoryDocumentsPageRegulatoryDocumentsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'regulatory_documents_pages';
  info: {
    description: '';
    displayName: 'RegulatoryDocumentsPage';
    pluralName: 'regulatory-documents-pages';
    singularName: 'regulatory-documents-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    document_link_list: Schema.Attribute.Component<'link-item.link-item', true>;
    google_drive_doc_folder_id: Schema.Attribute.String;
    license: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::regulatory-documents-page.regulatory-documents-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRegulatoryFrameworkPageRegulatoryFrameworkPage
  extends Struct.SingleTypeSchema {
  collectionName: 'regulatory_framework_pages';
  info: {
    displayName: 'RegulatoryFrameworkPage';
    pluralName: 'regulatory-framework-pages';
    singularName: 'regulatory-framework-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::regulatory-framework-page.regulatory-framework-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSareerPageSareerPage extends Struct.SingleTypeSchema {
  collectionName: 'sareer_pages';
  info: {
    description: '';
    displayName: 'career_page';
    pluralName: 'sareer-pages';
    singularName: 'sareer-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companies: Schema.Attribute.Relation<'oneToMany', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sareer-page.sareer-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSocialMediaSocialMedia extends Struct.CollectionTypeSchema {
  collectionName: 'social_medias';
  info: {
    displayName: 'SocialMedia';
    pluralName: 'social-medias';
    singularName: 'social-media';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-media.social-media'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    social: Schema.Attribute.Component<'social.social', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSocialSupportPageSocialSupportPage
  extends Struct.SingleTypeSchema {
  collectionName: 'social_support_pages';
  info: {
    description: '';
    displayName: 'SocialSupportPage';
    pluralName: 'social-support-pages';
    singularName: 'social-support-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    link: Schema.Attribute.Component<'link-card.link-card', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-support-page.social-support-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    student_ratings_folder_id: Schema.Attribute.Component<
      'google-drive-folder-id.google-drive-folder-id',
      false
    >;
    teacher: Schema.Attribute.Relation<'oneToOne', 'api::teacher.teacher'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpecialEntryConditionsPageSpecialEntryConditionsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'special_entry_conditions_pages';
  info: {
    displayName: 'SpecialEntryConditionsPage';
    pluralName: 'special-entry-conditions-pages';
    singularName: 'special-entry-conditions-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::special-entry-conditions-page.special-entry-conditions-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSportsDrivePageSportsDrivePage
  extends Struct.SingleTypeSchema {
  collectionName: 'sports_drive_pages';
  info: {
    displayName: 'SportsDrivePage';
    pluralName: 'sports-drive-pages';
    singularName: 'sports-drive-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sports-drive-page.sports-drive-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStudentGovernmentStudentGovernment
  extends Struct.CollectionTypeSchema {
  collectionName: 'student_governments';
  info: {
    description: '';
    displayName: 'StudentGovernment';
    pluralName: 'student-governments';
    singularName: 'student-government';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::student-government.student-government'
    > &
      Schema.Attribute.Private;
    mail: Schema.Attribute.Email;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    social: Schema.Attribute.Component<'social.social', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStudentSelfGovernmentPageStudentSelfGovernmentPage
  extends Struct.SingleTypeSchema {
  collectionName: 'student_self_government_pages';
  info: {
    description: '';
    displayName: 'StudentSelfGovernmentPage';
    pluralName: 'student-self-government-pages';
    singularName: 'student-self-government-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::student-self-government-page.student-self-government-page'
    > &
      Schema.Attribute.Private;
    news: Schema.Attribute.Relation<'oneToMany', 'api::new.new'>;
    publishedAt: Schema.Attribute.DateTime;
    student_governments: Schema.Attribute.Relation<
      'oneToMany',
      'api::student-government.student-government'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStudentsRightsAndObligationsPageStudentsRightsAndObligationsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'students_rights_and_obligations_pages';
  info: {
    displayName: 'StudentsRightsAndObligationsPage';
    pluralName: 'students-rights-and-obligations-pages';
    singularName: 'students-rights-and-obligations-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    google_drive_doc_folder_id: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::students-rights-and-obligations-page.students-rights-and-obligations-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSubjectCommissionPageSubjectCommissionPage
  extends Struct.SingleTypeSchema {
  collectionName: 'subject_commission_pages';
  info: {
    description: '';
    displayName: 'SubjectCommissionPage';
    pluralName: 'subject-commission-pages';
    singularName: 'subject-commission-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    google_drive_doc_folder_id: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subject-commission-page.subject-commission-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subject_commissions_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::subject-commissions-list.subject-commissions-list'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSubjectCommissionsListSubjectCommissionsList
  extends Struct.CollectionTypeSchema {
  collectionName: 'subject_commissions_lists';
  info: {
    description: '';
    displayName: 'subject_commissions_list';
    pluralName: 'subject-commissions-lists';
    singularName: 'subject-commissions-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    google_drive_doc_folder_id: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subject-commissions-list.subject-commissions-list'
    > &
      Schema.Attribute.Private;
    members: Schema.Attribute.Relation<'oneToMany', 'api::teacher.teacher'>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTeacherTeacher extends Struct.CollectionTypeSchema {
  collectionName: 'teachers';
  info: {
    description: '';
    displayName: 'teacher';
    pluralName: 'teachers';
    singularName: 'teacher';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contacts_datum: Schema.Attribute.Relation<
      'manyToOne',
      'api::contacts-page.contacts-page'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::teacher.teacher'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    teacher_info: Schema.Attribute.Component<'contact.contacts', false> &
      Schema.Attribute.Required;
    teachers: Schema.Attribute.Relation<
      'manyToOne',
      'api::subject-commissions-list.subject-commissions-list'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTrainingAndProductionActivityTrainingAndProductionActivity
  extends Struct.SingleTypeSchema {
  collectionName: 'training_and_production_activities';
  info: {
    description: '';
    displayName: 'TrainingAndProductionActivity';
    pluralName: 'training-and-production-activities';
    singularName: 'training-and-production-activity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::training-and-production-activity.training-and-production-activity'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTrainingAndProductionWorkshopTrainingAndProductionWorkshop
  extends Struct.SingleTypeSchema {
  collectionName: 'training_and_production_workshops';
  info: {
    displayName: 'TrainingAndProductionWorkshop';
    pluralName: 'training-and-production-workshops';
    singularName: 'training-and-production-workshop';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::training-and-production-workshop.training-and-production-workshop'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUpbringingActivitiesPageUpbringingActivitiesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'upbringing_activities_pages';
  info: {
    description: '';
    displayName: 'UpbringingActivitiesPage';
    pluralName: 'upbringing-activities-pages';
    singularName: 'upbringing-activities-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::upbringing-activities-page.upbringing-activities-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVolunteeringPageVolunteeringPage
  extends Struct.SingleTypeSchema {
  collectionName: 'volunteering_pages';
  info: {
    displayName: 'VolunteeringPage';
    pluralName: 'volunteering-pages';
    singularName: 'volunteering-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::volunteering-page.volunteering-page'
    > &
      Schema.Attribute.Private;
    news: Schema.Attribute.Relation<'oneToMany', 'api::new.new'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiYourSafetyPageYourSafetyPage
  extends Struct.SingleTypeSchema {
  collectionName: 'your_safety_pages';
  info: {
    description: '';
    displayName: 'WorkSafetyPage';
    pluralName: 'your-safety-pages';
    singularName: 'your-safety-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Component<'department.department', false>;
    images: Schema.Attribute.Component<
      'image-width-title.image-width-title',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::your-safety-page.your-safety-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video_item: Schema.Attribute.Component<'video-item.video-item', true>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::academic-mobility-page.academic-mobility-page': ApiAcademicMobilityPageAcademicMobilityPage;
      'api::accessibility-and-inclusive-learning-page.accessibility-and-inclusive-learning-page': ApiAccessibilityAndInclusiveLearningPageAccessibilityAndInclusiveLearningPage;
      'api::admiddion-committe-page.admiddion-committe-page': ApiAdmiddionCommittePageAdmiddionCommittePage;
      'api::administration-page.administration-page': ApiAdministrationPageAdministrationPage;
      'api::admission-calendar.admission-calendar': ApiAdmissionCalendarAdmissionCalendar;
      'api::animal-husbandry-laboratory-page.animal-husbandry-laboratory-page': ApiAnimalHusbandryLaboratoryPageAnimalHusbandryLaboratoryPage;
      'api::awards-and-distinction-page.awards-and-distinction-page': ApiAwardsAndDistinctionPageAwardsAndDistinctionPage;
      'api::bank-account-page.bank-account-page': ApiBankAccountPageBankAccountPage;
      'api::career-orientation-and-image-formation.career-orientation-and-image-formation': ApiCareerOrientationAndImageFormationCareerOrientationAndImageFormation;
      'api::category.category': ApiCategoryCategory;
      'api::classroom-and-laboratory.classroom-and-laboratory': ApiClassroomAndLaboratoryClassroomAndLaboratory;
      'api::college-history-page.college-history-page': ApiCollegeHistoryPageCollegeHistoryPage;
      'api::college-vacancy.college-vacancy': ApiCollegeVacancyCollegeVacancy;
      'api::common-pool.common-pool': ApiCommonPoolCommonPool;
      'api::company.company': ApiCompanyCompany;
      'api::conceptual-principles-page.conceptual-principles-page': ApiConceptualPrinciplesPageConceptualPrinciplesPage;
      'api::contacts-page.contacts-page': ApiContactsPageContactsPage;
      'api::councils-and-commissions-page.councils-and-commissions-page': ApiCouncilsAndCommissionsPageCouncilsAndCommissionsPage;
      'api::degree-education-page.degree-education-page': ApiDegreeEducationPageDegreeEducationPage;
      'api::department-page.department-page': ApiDepartmentPageDepartmentPage;
      'api::development-of-academic-integrity.development-of-academic-integrity': ApiDevelopmentOfAcademicIntegrityDevelopmentOfAcademicIntegrity;
      'api::discussion-page.discussion-page': ApiDiscussionPageDiscussionPage;
      'api::distance-learning-page.distance-learning-page': ApiDistanceLearningPageDistanceLearningPage;
      'api::domitory-government.domitory-government': ApiDomitoryGovernmentDomitoryGovernment;
      'api::domitory-page.domitory-page': ApiDomitoryPageDomitoryPage;
      'api::dual-form-of-learning-page.dual-form-of-learning-page': ApiDualFormOfLearningPageDualFormOfLearningPage;
      'api::e-library.e-library': ApiELibraryELibrary;
      'api::educational-accounting.educational-accounting': ApiEducationalAccountingEducationalAccounting;
      'api::educational-activities-page.educational-activities-page': ApiEducationalActivitiesPageEducationalActivitiesPage;
      'api::enrollment-order-list.enrollment-order-list': ApiEnrollmentOrderListEnrollmentOrderList;
      'api::ensuring-the-quality-of-education-page.ensuring-the-quality-of-education-page': ApiEnsuringTheQualityOfEducationPageEnsuringTheQualityOfEducationPage;
      'api::extracurricular-activities-list.extracurricular-activities-list': ApiExtracurricularActivitiesListExtracurricularActivitiesList;
      'api::extracurricular-activities-page.extracurricular-activities-page': ApiExtracurricularActivitiesPageExtracurricularActivitiesPage;
      'api::friendship-width-bnau.friendship-width-bnau': ApiFriendshipWidthBnauFriendshipWidthBnau;
      'api::graduator.graduator': ApiGraduatorGraduator;
      'api::hero-data.hero-data': ApiHeroDataHeroData;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::hr-department-page.hr-department-page': ApiHrDepartmentPageHrDepartmentPage;
      'api::husbandry-activity-page.husbandry-activity-page': ApiHusbandryActivityPageHusbandryActivityPage;
      'api::intelligent-networking-activity.intelligent-networking-activity': ApiIntelligentNetworkingActivityIntelligentNetworkingActivity;
      'api::intelligent-networking-page.intelligent-networking-page': ApiIntelligentNetworkingPageIntelligentNetworkingPage;
      'api::introductory-guide-page.introductory-guide-page': ApiIntroductoryGuidePageIntroductoryGuidePage;
      'api::learning-by-teaching-page.learning-by-teaching-page': ApiLearningByTeachingPageLearningByTeachingPage;
      'api::library.library': ApiLibraryLibrary;
      'api::material-technical-base.material-technical-base': ApiMaterialTechnicalBaseMaterialTechnicalBase;
      'api::memory-page.memory-page': ApiMemoryPageMemoryPage;
      'api::methodical-office-page.methodical-office-page': ApiMethodicalOfficePageMethodicalOfficePage;
      'api::metodological-case-page.metodological-case-page': ApiMetodologicalCasePageMetodologicalCasePage;
      'api::mission-and-goals-page.mission-and-goals-page': ApiMissionAndGoalsPageMissionAndGoalsPage;
      'api::modern-war-museum.modern-war-museum': ApiModernWarMuseumModernWarMuseum;
      'api::new.new': ApiNewNew;
      'api::nmt-page.nmt-page': ApiNmtPageNmtPage;
      'api::nmt.nmt': ApiNmtNmt;
      'api::optional-subjects-page.optional-subjects-page': ApiOptionalSubjectsPageOptionalSubjectsPage;
      'api::partners-page.partners-page': ApiPartnersPagePartnersPage;
      'api::plant-production-laboratory-page.plant-production-laboratory-page': ApiPlantProductionLaboratoryPagePlantProductionLaboratoryPage;
      'api::practical-training-page.practical-training-page': ApiPracticalTrainingPagePracticalTrainingPage;
      'api::profession.profession': ApiProfessionProfession;
      'api::regulatory-documents-page.regulatory-documents-page': ApiRegulatoryDocumentsPageRegulatoryDocumentsPage;
      'api::regulatory-framework-page.regulatory-framework-page': ApiRegulatoryFrameworkPageRegulatoryFrameworkPage;
      'api::sareer-page.sareer-page': ApiSareerPageSareerPage;
      'api::social-media.social-media': ApiSocialMediaSocialMedia;
      'api::social-support-page.social-support-page': ApiSocialSupportPageSocialSupportPage;
      'api::special-entry-conditions-page.special-entry-conditions-page': ApiSpecialEntryConditionsPageSpecialEntryConditionsPage;
      'api::sports-drive-page.sports-drive-page': ApiSportsDrivePageSportsDrivePage;
      'api::student-government.student-government': ApiStudentGovernmentStudentGovernment;
      'api::student-self-government-page.student-self-government-page': ApiStudentSelfGovernmentPageStudentSelfGovernmentPage;
      'api::students-rights-and-obligations-page.students-rights-and-obligations-page': ApiStudentsRightsAndObligationsPageStudentsRightsAndObligationsPage;
      'api::subject-commission-page.subject-commission-page': ApiSubjectCommissionPageSubjectCommissionPage;
      'api::subject-commissions-list.subject-commissions-list': ApiSubjectCommissionsListSubjectCommissionsList;
      'api::teacher.teacher': ApiTeacherTeacher;
      'api::training-and-production-activity.training-and-production-activity': ApiTrainingAndProductionActivityTrainingAndProductionActivity;
      'api::training-and-production-workshop.training-and-production-workshop': ApiTrainingAndProductionWorkshopTrainingAndProductionWorkshop;
      'api::upbringing-activities-page.upbringing-activities-page': ApiUpbringingActivitiesPageUpbringingActivitiesPage;
      'api::volunteering-page.volunteering-page': ApiVolunteeringPageVolunteeringPage;
      'api::your-safety-page.your-safety-page': ApiYourSafetyPageYourSafetyPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
